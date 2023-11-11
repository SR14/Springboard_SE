"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
  // if we got a logged-in user
  if (currentUser) updateUIOnUserLogin();
  checkStories('all');
}

$body.on("click", "#nav-all", navAllStories);

/** Upon checking of favorite box */
function navFavCheck(evt) {
  if (evt.target.type == 'checkbox') {
    const clickedStoryId = evt.target.id.replace("checkbox-", "");
    if (evt.target.checked == true) {
      currentUser.addFavorite(currentUser, clickedStoryId)
    } else {
      currentUser.removeFavorite(currentUser, clickedStoryId)
    };
  };
};
/** I believe problem is in checkboxes not being present at time of loading */
$body.on("click", navFavCheck);

/** Show main list of favorite stories when click site name */

async function navFavStories(evt) {
  console.debug("navFavStories", evt);
  hidePageComponents();
  putFavStoriesOnPage();
}

$body.on("click", "#nav-favorite", navFavStories);

/** Show main list of own stories when click site name */

async function navOwnStories(evt) {
  console.debug("navOwnStories", evt);
  hidePageComponents();
  putOwnStoriesOnPage();
}

$body.on("click", "#nav-own-stories", navOwnStories);

/** Upon delete own story button */
function navDeleteStory(evt) {
  if (evt.target.type == 'button') {
    const clickedStoryId = evt.target.id.replace("delete-", "");
    currentUser.removeStory(currentUser, clickedStoryId);
    removeStoryHTML('own', clickedStoryId)
  };
  
  
};
/** I believe problem is in checkboxes not being present at time of loading */
$body.on("click", navDeleteStory);

/** Show submit form and hide everything else */

function navSubmitClick(evt) {
  console.debug("navSubmitClick", evt);
  hidePageComponents();
  $submitForm.show();
}

$navSubmit.on("click", navSubmitClick);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** anytime the page refreshes to a link showing any stories...
 * check any favorite stories' checkbox
 */
async function checkStories(typeList) {
  // get favorite story list
  const updatedFavoritesList= await currentUser.getFavStories(currentUser)
  for (let story of updatedFavoritesList.stories) 
    $(`#${typeList}-stories-list #checkbox-${story.storyId}`).prop('checked', true)
};

/** remove story from html...
 */
function removeStoryHTML(typeList, storyId) {
  // first check if there is a user logged in
  $(`#${typeList}-stories-list #${storyId}`).remove();
};