"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;
let favStoryList;
let ownStoryList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);
  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <input type="button" value='Delete' class="delete-button hidden" id="delete-${story.storyId}">
        <input type="checkbox" class="favorite-checkbox hidden" id="checkbox-${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <div>
          <small class="story-author">by ${story.author}</small>
        </div>
        <div>
          <small class="story-user">posted by ${story.username}</small>
        </div>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();
  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

/** Gets list of user's favorite stories from server, generates their HTML, and puts on page. */
async function putFavStoriesOnPage() {
  console.debug("putFavStoriesOnPage");
  favStoryList = await currentUser.getFavStories(currentUser)
  $favStoriesList.empty();
  // loop through all of our stories and generate HTML for them
  for (let story of favStoryList.stories) {
    const $story = generateStoryMarkup(story);
    $favStoriesList.append($story);
    $(`#fav-stories-list #checkbox-${story.storyId}`).prop('checked', true)
  }
  $favStoriesList.show();
  $(".favorite-checkbox").show();

}

/** Gets list of user's favorite stories from server, generates their HTML, and puts on page. */
async function putOwnStoriesOnPage() {
  console.debug("putFavStoriesOnPage");
  ownStoryList = await currentUser.getOwnStories(currentUser)
  $ownStoriesList.empty();
  // loop through all of our stories and generate HTML for them
  for (let story of ownStoryList.stories) {
    const $story = generateStoryMarkup(story);
    $ownStoriesList.append($story);
  }
  $ownStoriesList.show();
  $(".favorite-checkbox").show();
  $('.delete-button').show();
  checkStories('own');
}

/** Add new story to stories list */
async function submitStory(evt) {
  console.debug("submitStory", evt);
  evt.preventDefault();

  // grab story title author and url
  const title = $('#submit-title').val();
  const author = $('#submit-author').val();
  const url = $('#submit-url').val();
  const storyObj = {title: title, author: author, url: url};
  // add story to API and get Story class back
  await storyList.addStory(currentUser, storyObj);
  storyList = await StoryList.getStories();
  hidePageComponents();
  putStoriesOnPage();
  updateUIOnUserLogin();
}

$submitForm.on("submit", submitStory);

