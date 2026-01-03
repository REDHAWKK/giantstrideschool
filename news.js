// news.js (rewritten)

// ---------- Firebase config ----------
const firebaseConfig = {
  apiKey: "AIzaSyDkhouztH4Qa0RGZdxIr8C3RsUgFYqUs7E",
  authDomain: "wine-with-us-database.firebaseapp.com",
  projectId: "wine-with-us-database",
  storageBucket: "wine-with-us-database.appspot.com",
  messagingSenderId: "254154647200",
  appId: "1:254154647200:web:87689653adc9af9f5dcbc5",
  measurementId: "G-YEBJD2TYYR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ---------- Globals ----------
let isAdmin = false;                 // fixed: global admin flag
let unsubscribePosts = null;         // holds realtime listener for top page
let postsLastVisible = null;         // for pagination (startAfter)
const POSTS_PAGE_SIZE = 5;           // posts per page; tweak as needed
const COMMENTS_PAGE_SIZE = 3;        // comments per post initial load

// DOM elements
const postText = document.getElementById("post-text");
const postButton = document.getElementById("post-btn");
const fileInput = document.getElementById("post-file");
const filePreview = document.getElementById("file-preview");
const newsFeed = document.getElementById("news-feed");
const postBox = document.getElementById("post-box");
const loginModal = document.getElementById("login-modal");
const googleLoginBtn = document.getElementById("google-login");
const logoutBtn = document.getElementById("logout-btn");
const addFileBtn = document.getElementById("add-file-btn");

// Mark latest post as seen when user visits the news page intentionally
function markLatestAsSeen() {
  db.collection("news")
    .orderBy("createdAt", "desc")
    .limit(1)
    .get()
    .then(snap => {
      if (!snap.empty) {
        const latest = snap.docs[0].data();
        if (latest?.createdAt) {
          const latestTime = latest.createdAt.toMillis();
          localStorage.setItem("lastSeenPost", latestTime);
          console.log("✅ Marked latest post as seen:", latestTime);
        }
      }
    })
    .catch(err => console.error("Error marking latest as seen:", err));
}

// Run once when the news page loads
document.addEventListener("DOMContentLoaded", markLatestAsSeen);

// // lightbox elements
// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightbox-img");
// const lightboxVideo = document.getElementById("lightbox-video");

// local state for file uploads and media mapping
let selectedFiles = [];
const postMediaMap = new Map(); // postId -> media array for lightbox

// Utility: format Firestore timestamp to readable string in Africa/Lagos
function formatDate(ts) {
  if (!ts) return "";
  const d = ts.toDate();
  return d.toLocaleString("en-US", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}

// ---------- Auth handling ----------
googleLoginBtn?.addEventListener("click", async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  } catch (err) {
    console.error("Login error:", err);
    alert("❌ Login failed. Try again.");
  }
});

logoutBtn?.addEventListener("click", async () => {
  try {
    await auth.signOut();
    alert("Logged out successfully");
  } catch (err) {
    console.error("Logout failed:", err);
    alert("❌ Logout failed.");
  }
});

// Helper to (re)start post subscription
async function startPostsSubscription() {
  // If we already have a realtime listener, unsubscribe it first
  if (unsubscribePosts) {
    try { unsubscribePosts(); } catch (e) { /* ignore */ }
    unsubscribePosts = null;
  }

// Real-time listener for the most recent page (limit(POSTS_PAGE_SIZE))
unsubscribePosts = db.collection("news")
  .orderBy("createdAt", "desc")
  .limit(POSTS_PAGE_SIZE)
  .onSnapshot(snapshot => {
    // Reset page cursor & container when realtime fires for top page
    newsFeed.innerHTML = "";
    postsLastVisible = null;
    postMediaMap.clear();

    const docs = snapshot.docs;
    if (docs.length > 0) {
      postsLastVisible = docs[docs.length - 1]; // for manual load more
    }

    docs.forEach(doc => {
      renderPostCard(doc.id, doc.data());
    });

    // 🔹 Update lastSeenPost to newest
    if (!snapshot.empty) {
      const latestPost = snapshot.docs[0].data();
      if (latestPost?.createdAt) {
      }
    }
    
      // Add "Load more posts" button after initial page
      addLoadMorePostsButton();
    }, err => {
      console.error("Posts realtime failed:", err);
      // Fallback: load first page via get()
      loadPostsPage();
    });
}

// Load initial or next page (non-realtime) — used for "Load more posts"
async function loadPostsPage(startAfterDoc = null) {
  try {
    let query = db.collection("news").orderBy("createdAt", "desc").limit(POSTS_PAGE_SIZE);
    if (startAfterDoc) query = query.startAfter(startAfterDoc);

    const snap = await query.get();
    if (snap.empty) {
      // nothing to load
      if (!startAfterDoc) newsFeed.innerHTML = "<p class='text-gray-500'>No posts yet.</p>";
      removeLoadMorePostsButton();
      return;
    }

    const docs = snap.docs;
    docs.forEach(doc => renderPostCard(doc.id, doc.data()));

    postsLastVisible = docs[docs.length - 1];
    // if less than page size -> no more posts
    if (docs.length < POSTS_PAGE_SIZE) {
      addLoadMorePostsButton(false); // show no more
    } else {
      addLoadMorePostsButton(true); // show load more
    }
  } catch (err) {
    console.error("Load posts page failed:", err);
  }
}

// ---------- Posting (media upload to Cloudinary) ----------
addFileBtn?.addEventListener("click", () => fileInput.click());

fileInput?.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    selectedFiles = [...selectedFiles, ...Array.from(fileInput.files)];
    renderPreviews();
    fileInput.value = "";
  }
});

function renderPreviews() {
  filePreview.innerHTML = "";
  if (!selectedFiles || selectedFiles.length === 0) {
    filePreview.classList.add("hidden");
    return;
  }
  filePreview.classList.remove("hidden");

  selectedFiles.forEach((file, index) => {
    const url = URL.createObjectURL(file);
    const wrapper = document.createElement("div");
    wrapper.className = "relative w-24 h-24 rounded-lg overflow-hidden border";

    wrapper.innerHTML = `
      <img src="${url}" class="w-full h-full object-cover">
      <button class="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full px-2 py-0.5 text-xs remove-btn" data-index="${index}">✕</button>
    `;
    filePreview.appendChild(wrapper);
  });
}

// remove preview handler (event delegation)
filePreview?.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const idx = parseInt(e.target.dataset.index, 10);
    if (!isNaN(idx)) {
      selectedFiles.splice(idx, 1);
      renderPreviews();
    }
  }
});

postButton?.addEventListener("click", async () => {
  const text = (postText?.value || "").trim();

  if (!text && selectedFiles.length === 0) {
    alert("Write something or upload a file before posting!");
    return;
  }

  const user = auth.currentUser;
  if (!user) {
    loginModal?.classList.remove("hidden");
    return;
  }

  postButton.disabled = true;
  postButton.innerHTML = `
     Posting <i class="fas fa-spinner fa-spin mr-2"></i>
  `;


  try {
    const media = [];
    for (const file of selectedFiles) {
      const endpoint = file.type.startsWith("video/") ? "video/upload" : "image/upload";
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "School-Project");

      const res = await fetch(`https://api.cloudinary.com/v1_1/dgdiq2zlz/${endpoint}`, {
        method: "POST",
        body: formData
      });
      const data = await res.json();

      if (data.secure_url) {
        media.push({
          url: data.secure_url,
          type: file.type.startsWith("video/") ? "video" : "image",
        });
      } else {
        console.error("Cloudinary upload error:", data);
        throw new Error("Upload failed");
      }
    }

    await db.collection("news").add({
      text,
      media,
      author: "Giant Stride School",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      likes: []
    });

    // reset
    postText.value = "";
    selectedFiles = [];
    renderPreviews();
    alert("✅ Post successful!");
  } catch (err) {
    console.error("Post failed:", err);
    alert("❌ Could not post. Try again.");
  } finally {
  if (postButton) {
    postButton.disabled = false;
    postButton.innerHTML = "Post";
  }
}
});

// ---------- Like handling (delegated) ----------
document.addEventListener("click", async (e) => {
  const likeBtn = e.target.closest(".like-btn");
  if (!likeBtn) return;

  const user = auth.currentUser;
  if (!user) {
    loginModal?.classList.remove("hidden");
    return;
  }

  const postId = likeBtn.dataset.id;
  const postRef = db.collection("news").doc(postId);
  const uid = user.uid;

  try {
    const doc = await postRef.get();
    const data = doc.data() || {};
    const likes = data.likes || [];

    if (likes.includes(uid)) {
      await postRef.update({ likes: firebase.firestore.FieldValue.arrayRemove(uid) });
    } else {
      await postRef.update({ likes: firebase.firestore.FieldValue.arrayUnion(uid) });
    }
  } catch (err) {
    console.error("Like failed:", err);
    alert("Could not update like. Please try again.");
  }
});

// ---------- Comments: post comment & delete post (delegated) ----------
document.addEventListener("click", async (e) => {
  // Post comment
  const commentBtn = e.target.closest(".comment-btn");
  if (commentBtn) {
    const postId = commentBtn.dataset.id;
    const input = document.querySelector(`.comment-input[data-id="${postId}"]`);
    if (!input) return;
    const text = input.value.trim();
    if (!text) return alert("Write a comment first!");

    const user = auth.currentUser;
    if (!user) return alert("Log in to comment.");

    try {
      await db.collection("news").doc(postId).collection("comments").add({
        text,
        author: user.displayName || user.email || "Anonymous",
        uid: user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      input.value = "";
      // optionally refresh shown comments (we'll fetch a fresh page)
      loadCommentsForPost(postId, /*reset*/ true);
    } catch (err) {
      console.error("Comment failed:", err);
      alert("❌ Could not add comment.");
    }
    return;
  }

  // Delete post (admins only)
  if (e.target.classList.contains("delete-btn")) {
    const postId = e.target.dataset.id;
    if (!isAdmin) return alert("Only admins can delete posts.");
    if (!confirm("Delete this post?")) return;
    try {
      // Delete comments subcollection (best-effort; Firestore doesn't allow deleting collection in one call)
      // We'll delete top-level doc (comments remain orphaned in console but usually small). For production,
      // consider Cloud Function to cascade delete.
      await db.collection("news").doc(postId).delete();
      alert("✅ Post deleted");
      // remove from DOM if present
      const card = document.getElementById(`post-${postId}`);
      if (card) card.remove();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("❌ Could not delete post.");
    }
    return;
  }

  // Load more comments for a post
  if (e.target.classList.contains("load-more-comments")) {
    const postId = e.target.dataset.id;
    const btn = e.target;
    await loadCommentsForPost(postId, /*reset*/ false, btn);
    return;
  }

  // Load more posts
  if (e.target.id === "load-more-posts-btn") {
    e.target.disabled = true;
    e.target.textContent = "Loading...";
    await loadMorePostsHandler();
    e.target.disabled = false;
    e.target.textContent = "Load more news";
    return;
  }
});

// ---------- Render helpers ----------

// Render a single post card and attach listeners for comments (initial comments load)
function renderPostCard(postId, postData) {
  const likes = postData.likes || [];
  const likeCount = likes.length;
  const createdAt = postData.createdAt ? formatDate(postData.createdAt) : "";
  const author = postData.author || "Giant Stride School";
  const text = postData.text || "";
  const media = Array.isArray(postData.media) ? postData.media : [];

  const deleteBtnHTML = isAdmin
    ? `<button class="delete-btn text-red-500 text-xs" data-id="${postId}">Delete</button>`
    : "";

  const card = document.createElement("div");
  card.className = "bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6";
  card.id = `post-${postId}`;

  card.innerHTML = `
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">B</div>
      <div class="ml-3 flex-1">
        <h3 class="font-bold">${escapeHtml(author)}</h3>
        <p class="text-xs text-gray-500">${createdAt}</p>
      </div>
      ${deleteBtnHTML}
    </div>

    <p class="mb-4 text-gray-700">${escapeHtml(text)}</p>

    ${buildMediaGridHTML(postId, media)}

    <div class="flex items-center space-x-6 text-gray-600 text-sm mb-3">
      <button class="like-btn hover:text-primary" data-id="${postId}">
        👍 Like (<span class="like-count">${likeCount}</span>)
      </button>
    </div>

    <div class="comments-container mb-2">
      <div class="comments-list" id="comments-${postId}"></div>
      <button class="load-more-comments text-sm text-primary hidden" data-id="${postId}">
        Load more comments
      </button>
    </div>

    <div class="flex items-center mt-2">
      <input type="text" class="comment-input flex-1 border rounded px-3 py-1 text-sm"
             placeholder="Write a comment..." data-id="${postId}">
      <button class="comment-btn ml-2 text-primary" data-id="${postId}">Post</button>
    </div>
  `;

  newsFeed.appendChild(card);

  // 🔥 INIT LIGHTGALLERY FOR THIS POST
  const galleryEl = document.getElementById(`lg-post-${postId}`);
  if (galleryEl) {
    lightGallery(galleryEl, {
      selector: ".lg-item",
      plugins: [lgThumbnail],
      speed: 400,
      download: false,
      videojs: true
    });
  }

  loadCommentsForPost(postId, true);

  db.collection("news").doc(postId).onSnapshot(doc => {
    if (!doc.exists) return;
    const data = doc.data();
    const likeCountEl = card.querySelector(".like-count");
    if (likeCountEl) likeCountEl.textContent = (data.likes || []).length;
  });
}


function buildMediaGridHTML(postId, media) {
  if (!media.length) return "";

  let html = `<div id="lg-post-${postId}" class="media-grid mb-4">`;

  if (media.length === 1) {
    html += singleMediaHTML(media[0]);
  } 
  else if (media.length === 2) {
    html += `<div class="grid grid-cols-2 gap-2">
      ${media.slice(0, 2).map(mediaThumbHTML).join("")}
    </div>`;
  } 
  else if (media.length === 3) {
    html += `
      <div class="grid grid-cols-2 gap-2 mb-2">
        ${media.slice(0, 2).map(mediaThumbHTML).join("")}
      </div>
      <div class="grid grid-cols-1">
        ${mediaThumbHTML(media[2])}
      </div>`;
  } 
  else {
    html += `<div class="grid grid-cols-2 gap-2">`;
    media.slice(0, 4).forEach((m, i) => {
      html += i === 3 && media.length > 4
        ? mediaThumbHTML(m, media.length - 4)
        : mediaThumbHTML(m);
    });
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}


function singleMediaHTML(m) {
  return m.type === "video"
    ? videoItemHTML(m, "w-full")
    : imageItemHTML(m, "w-full");
}

function mediaThumbHTML(m, overlayCount = 0) {
  const base =
    m.type === "video"
      ? videoItemHTML(m, "h-48")
      : imageItemHTML(m, "h-48");

  return overlayCount
    ? `<div class="relative">${base}${overlayHTML(overlayCount)}</div>`
    : `<div>${base}</div>`;
}

function imageItemHTML(m, sizeClass) {
  return `
    <a class="lg-item" href="${escapeHtmlAttr(m.url)}">
      <img src="${escapeHtmlAttr(m.url)}"
           class="rounded-lg w-full ${sizeClass} object-cover cursor-pointer">
    </a>`;
}

function videoItemHTML(m, sizeClass) {
  return `
    <a class="lg-item"
       data-video='{"source":[{"src":"${m.url}","type":"video/mp4"}],"attributes":{"controls":true}}'>
      <video class="rounded-lg w-full ${sizeClass} object-contain">
        <source src="${m.url}" type="video/mp4">
      </video>
    </a>`;
}

function overlayHTML(count) {
  return `
    <div class="absolute inset-0 bg-black bg-opacity-50
                flex items-center justify-center
                text-white text-xl font-bold rounded-lg">
      +${count}
    </div>`;
}

// // ---------- Lightbox API (global functions used by HTML onclicks) ----------
// window.openLightboxByPost = function(postId, index) {
//   const media = postMediaMap.get(postId) || [];
//   openLightbox(media, index);
// };

// function openLightbox(media, index) {
//   if (!media || media.length === 0) return;
//   lightbox?.classList.remove("hidden");
//   showLightboxItem(media, index);
//   // store current state
//   window._lightbox = { media, index };
// }

// function showLightboxItem(media, index) {
//   // fallback if called without args
//   if (!media) {
//     const state = window._lightbox || {};
//     media = state.media || [];
//     index = state.index || 0;
//   }
//   const m = media[index];
//   if (!m) return;

//   // hide both first
//   lightboxImg?.classList.add("hidden");
//   lightboxVideo?.classList.add("hidden");

//   if (m.type === "video") {
//     if (lightboxVideo) {
//       lightboxVideo.src = m.url;
//       lightboxVideo.classList.remove("hidden");
//       try { lightboxVideo.play(); } catch (e) { /* ignore autoplay block */ }
//     }
//   } else {
//     if (lightboxImg) {
//       lightboxImg.src = m.url;
//       lightboxImg.classList.remove("hidden");
//     }
//   }

//   // save index
//   window._lightbox = { media, index };
// }

// window.closeLightbox = function() {
//   if (!lightbox) return;
//   if (lightboxVideo) {
//     try { lightboxVideo.pause(); lightboxVideo.removeAttribute("src"); lightboxVideo.load(); } catch (e) {}
//   }
//   lightbox.classList.add("hidden");
// };

// window.prevLightbox = function() {
//   const state = window._lightbox || {};
//   if (!state.media) return;
//   if (state.index > 0) {
//     state.index--;
//     window._lightbox = state;
//     showLightboxItem(state.media, state.index);
//   }
// };

// window.nextLightbox = function() {
//   const state = window._lightbox || {};
//   if (!state.media) return;
//   if (state.index < state.media.length - 1) {
//     state.index++;
//     window._lightbox = state;
//     showLightboxItem(state.media, state.index);
//   }
// };

// ---------- Comments pagination & rendering ----------
async function loadCommentsForPost(postId, reset = false, callerButton = null) {
  try {
    const container = document.getElementById(`comments-${postId}`);
    const loadMoreBtn = document.querySelector(`#post-${postId} .load-more-comments`);
    if (!container) return;

    // If reset, clear and fetch first page
    if (reset) {
      container.innerHTML = "";
    }

    // Determine last visible for this post by checking existing DOM
    const existingComments = container.querySelectorAll(".comment-item");
    let startAfterDoc = null;
    if (!reset && existingComments.length > 0) {
      // We stored the last comment's timestamp on dataset for load-more handling
      const lastTimestamp = container.dataset.lastTimestamp;
      if (lastTimestamp) startAfterDoc = new Date(lastTimestamp);
    }

    let query = db.collection("news").doc(postId).collection("comments")
      .orderBy("createdAt", "asc")
      .limit(COMMENTS_PAGE_SIZE);

    if (!reset && startAfterDoc) {
      query = query.startAfter(startAfterDoc);
    }

    const snap = await query.get();
    if (snap.empty) {
      // Nothing to show - hide load more button
      if (loadMoreBtn) loadMoreBtn.classList.add("hidden");
      return;
    }

    // Append fetched comments
    snap.forEach(doc => {
      const c = doc.data();
      const dateStr = c.createdAt ? formatDate(c.createdAt) : "";
      const commentHtml = `
        <div class="text-sm comment-item">
          <span class="font-bold">${escapeHtml(c.author || "Anonymous")}</span>
          <span> ${escapeHtml(c.text || "")}</span>
          <p class="text-xs text-gray-400">${dateStr}</p>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", commentHtml);
    });

    // If we fetched a full page, show load more; otherwise hide
    if (snap.size >= COMMENTS_PAGE_SIZE) {
      if (loadMoreBtn) loadMoreBtn.classList.remove("hidden");
    } else {
      if (loadMoreBtn) loadMoreBtn.classList.add("hidden");
    }

    // store last comment's createdAt for next cursor
    const lastDoc = snap.docs[snap.docs.length - 1];
    if (lastDoc && lastDoc.data().createdAt) {
      container.dataset.lastTimestamp = lastDoc.data().createdAt.toDate();
    }
  } catch (err) {
    console.error("Load comments failed for", postId, err);
  }
}

// ---------- Pagination UI for posts ----------
function addLoadMorePostsButton(show = true) {
  removeLoadMorePostsButton();
  const btn = document.createElement("div");
  btn.className = "flex justify-center my-6";
  btn.innerHTML = `<button id="load-more-posts-btn" class="bg-primary text-white px-4 py-2 rounded">${show ? "Load more posts" : "No more posts"}</button>`;
  newsFeed.insertAdjacentElement("afterend", btn);
  if (!show) {
    const b = btn.querySelector("button");
    if (b) b.disabled = true;
  }
}

function removeLoadMorePostsButton() {
  const existing = document.getElementById("load-more-posts-btn");
  if (existing && existing.parentElement) existing.parentElement.remove();
}

async function loadMorePostsHandler() {
  try {
    // If we have a postsLastVisible from realtime/previous loads, use it
    if (postsLastVisible) {
      const nextQuery = db.collection("news")
        .orderBy("createdAt", "desc")
        .startAfter(postsLastVisible)
        .limit(POSTS_PAGE_SIZE);

      const snap = await nextQuery.get();
      if (snap.empty) {
        addLoadMorePostsButton(false);
        return;
      }

      snap.docs.forEach(doc => renderPostCard(doc.id, doc.data()));
      postsLastVisible = snap.docs[snap.docs.length - 1];

      if (snap.docs.length < POSTS_PAGE_SIZE) addLoadMorePostsButton(false);
    } else {
      // fallback: load initial page via loadPostsPage
      await loadPostsPage();
    }
  } catch (err) {
    console.error("Load more posts failed:", err);
  }
}

// ---------- Helpers ----------
function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/[&<>"']/g, function (s) {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[s];
  });
}
function escapeHtmlAttr(str) {
  if (!str) return "";
  return String(str).replace(/"/g, "&quot;");
}

// ---------- Initial auth state and admin check ----------
auth.onAuthStateChanged(async (user) => {
  // Reset admin flag
  isAdmin = false;

  if (!user) {
    // Not logged in
    loginModal?.classList.remove("hidden");
    logoutBtn?.classList.add("hidden");
    postBox?.classList.add("hidden");

    // Unsubscribe posts if active - we'll load first page non-realtime
    if (unsubscribePosts) {
      try { unsubscribePosts(); } catch (e) {}
      unsubscribePosts = null;
    }

    // Try to load posts non-realtime for anonymous users
    loadPostsPage();
    return;
  }

  // Logged in
  loginModal?.classList.add("hidden");
  logoutBtn?.classList.remove("hidden");

  // Check admin role by checking the 'admins' collection document with user's email
  try {
    const roleDoc = await db.collection("admins").doc(user.email).get();
    isAdmin = roleDoc.exists;
    if (isAdmin) postBox?.classList.remove("hidden");
    else postBox?.classList.add("hidden");
  } catch (err) {
    console.error("Role check failed:", err);
    postBox?.classList.add("hidden");
    isAdmin = false;
  }

  // Start realtime subscription for top posts
  startPostsSubscription();
});

// On first load (no auth event), attempt to load posts (anonymous view)
if (!auth.currentUser) {
  loadPostsPage();
}

// ---------- End of file ----------
