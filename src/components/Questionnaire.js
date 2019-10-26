import React from "react";

export default function SurveyQuestionnaire() {
  return (
    <div className="newUserForm">
      <h1>Survey</h1>
      <p>
        Take a quick survey to find your perfect match! These
        questions are answered by the numbers 1 through 5. If you
        really, really disagree with the statement, your answer would
        be 1. If you find a statement to hit extremely close to home,
        put in a 5.
      </p>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Name (Required)"
          />
        </div>

        <div class="form-group">
          <input
            id="photo"
            type="text"
            class="form-control"
            placeholder="Link to Profile Photo (Required)"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Location"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Gender"
          />
        </div>
        <div class="form-group">
          <label for="question1">I like to do janitorial work.</label>
          <select class="form-control">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question2">
            I have some bird-like features (or so I've been told).
          </label>
          <select class="form-control">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question3">
            I think very highly of myself.
          </label>
          <select class="form-control">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question4">I enjoy martial arts.</label>
          <select class="form-control">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question5">I read as a hobby.</label>
          <select class="form-control">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question6">
            I am God's gift to the opposite sex.
          </label>
          <select class="form-control">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question7">
            I don't so well with the opposite sex.
          </label>
          <select class="form-control">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question8">I am good with money.</label>
          <select class="form-control">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question9">I work out at the gym often.</label>
          <select class="form-control">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question10">
            I consider myself aggressive.
          </label>
          <select class="form-control">
            <option value="empty"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </form>
      <div class="text-center">
        <button type="submit" class="btn">
          Submit
        </button>
      </div>
    </div>
  );
}
