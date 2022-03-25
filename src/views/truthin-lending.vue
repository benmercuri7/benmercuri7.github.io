<template>
  <div class="truthin-lending-container">
    <div class="truthin-lending-top-nav-bar">
      <svg viewBox="0 0 1024 1024" class="truthin-lending-home">
        <path d="M512 128l342 256v512h-214v-298h-256v298h-214v-512z"></path></svg
      ><svg viewBox="0 0 731.4285714285713 1024" class="truthin-lending-profile">
        <path
          d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="truthin-lending-settings">
        <path
          d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
        ></path>
      </svg>
      <router-link to="/" class="truthin-lending-navlink">
        <img
          alt="image"
          src="/playground_assets/core%20logo%203-200h.png"
          class="truthin-lending-logo"
        />
      </router-link>
    </div>
    <div class="truthin-lending-side-nav-bar">
      <span class="truthin-lending-loan-name">872346 Jackson Smith</span>
      <li class="truthin-lending-supplementary-contracts list-item">
        <span class="truthin-lending-text">Truth in Lending</span>
      </li>
      <li class="truthin-lending-miscellaneous list-item">
        <router-link to="/file-dd-211111" class="truthin-lending-navlink1">
          Contract &amp; Fees
        </router-link>
      </li>
      <li class="truthin-lending-miscellaneous1 list-item">
        <router-link to="/file-dd-2111111" class="truthin-lending-navlink2">
          Warranty
        </router-link>
      </li>
      <li class="truthin-lending-miscellaneous2 list-item">
        <router-link to="/file-dd-21111111" class="truthin-lending-navlink3">
          GAP
        </router-link>
      </li>
      <li class="truthin-lending-miscellaneous3 list-item">
        <router-link to="/file-dd-211111111" class="truthin-lending-navlink4">
          Service Contract
        </router-link>
      </li>
      <li class="truthin-lending-miscellaneous4 list-item">
        <router-link to="/file-dd-2111111111" class="truthin-lending-navlink5">
          Title
        </router-link>
      </li>
      <li class="truthin-lending-miscellaneous5 list-item">
        <router-link to="/file-dd-21111111111" class="truthin-lending-navlink6">
          GPS
        </router-link>
      </li>
      <li class="truthin-lending-file-validation-signatures list-item">
        <router-link to="/file-dd-2111" class="truthin-lending-navlink7">
          Data Match
        </router-link>
      </li>
      <svg viewBox="0 0 1024 1024" class="truthin-lending-check">
        <path
          d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path>
      </svg>
    </div>
    <svg viewBox="0 0 1024 1024" class="truthin-lending-check1">
      <path
        d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
      ></path>
    </svg>
    <span class="truthin-lending-transaction-due-diligence">
      Transaction Due Diligence
    </span>
    <span class="truthin-lending-file-due-diligence">File Due Diligence</span>
    <span class="truthin-lending-initial-file-validation">Truth in Lending</span>
    <router-link to="/file-val-signatures" class="truthin-lending-inventory">
      Inventory
    </router-link>
    <span class="truthin-lending-slash">/</span>
    <span class="truthin-lending-slash1">/</span>
    <span class="truthin-lending-do-you-have-the-file">Deferred Down</span>
    <span class="truthin-lending-do-you-have-the-file1">Down Payment</span>
    <span class="truthin-lending-do-you-have-the-file2">Payment Amount</span>
    <span class="truthin-lending-do-you-have-the-file3">Term</span>
    <span class="truthin-lending-do-you-have-the-file4">Payment Frequency</span>
    <span class="truthin-lending-do-you-have-the-file5">Final Payment</span>
    <span class="truthin-lending-do-you-have-the-file6">First Payment Date</span>
    <span class="truthin-lending-do-you-have-the-file7">Total Payments</span>
    <span class="truthin-lending-do-you-have-the-file8">APR</span>
    <span class="truthin-lending-is-this-an-original-contract">
      Finance Charge
    </span>
    <span class="truthin-lending-is-there-anything-handwritten">
      Amount Financed
    </span>
    <button class="truthin-lending-save button">
      <span class="truthin-lending-text1">Save</span>
    </button>
    <router-link to="/file-dd-211111" class="truthin-lending-next button">
      <svg viewBox="0 0 1024 1024" class="truthin-lending-right-arrow">
        <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
      </svg>
      <span class="truthin-lending-text2">Next</span>
    </router-link>
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput01 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput02 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput03 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput04 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput05 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput06 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput07 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput08 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput09 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="truthin-lending-textinput10 input"
    />
    <router-link to="/file-dd-2111" class="truthin-lending-last button">
      <span class="truthin-lending-text3">Last</span>
      <svg viewBox="0 0 1024 1024" class="truthin-lending-left-arrow">
        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TruthinLending',
  metaInfo: {
    title: '5. Truth in Lending - CORE DD',
    meta: [
      {
        property: 'og:title',
        content: '5. Truth in Lending - CORE DD',
      },
    ],
  },
}
</script>

<style scoped>
.truthin-lending-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
}
.truthin-lending-top-nav-bar {
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  border-color: #cfcfcf;
  border-style: solid;
  border-width: 2px;
  justify-content: flex-start;
}
.truthin-lending-home {
  top: 13px;
  fill: #615a9b;
  right: 181px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.truthin-lending-profile {
  top: 13px;
  fill: #615a9b;
  right: 124px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.truthin-lending-settings {
  top: 13px;
  fill: #615A9B;
  right: 67px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.truthin-lending-navlink {
  display: contents;
}
.truthin-lending-logo {
  top: 10px;
  left: 32px;
  width: 100px;
  position: absolute;
  object-fit: cover;
  text-decoration: none;
}
.truthin-lending-side-nav-bar {
  top: 48px;
  left: 0px;
  width: 293px;
  height: 954px;
  display: flex;
  position: absolute;
  align-items: center;
  border-color: #cfcfcf;
  border-style: solid;
  border-width: 2px;
  flex-direction: column;
  justify-content: center;
}
.truthin-lending-loan-name {
  top: 34px;
  left: 32px;
  position: absolute;
  font-size: 18px;
}
.truthin-lending-supplementary-contracts {
  top: 134px;
  left: 32px;
  position: absolute;
}
.truthin-lending-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.truthin-lending-miscellaneous {
  top: 174px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.truthin-lending-navlink1 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.truthin-lending-miscellaneous1 {
  top: 214px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.truthin-lending-navlink2 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.truthin-lending-miscellaneous2 {
  top: 254px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.truthin-lending-navlink3 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.truthin-lending-miscellaneous3 {
  top: 294px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.truthin-lending-navlink4 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.truthin-lending-miscellaneous4 {
  top: 334px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.truthin-lending-navlink5 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.truthin-lending-miscellaneous5 {
  top: 374px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.truthin-lending-navlink6 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.truthin-lending-file-validation-signatures {
  top: 94px;
  left: 33px;
  position: absolute;
}
.truthin-lending-navlink7 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.truthin-lending-check {
  top: 97px;
  fill: #0E9084;
  left: 132px;
  width: 14px;
  height: 14px;
  position: absolute;
}
.truthin-lending-check1 {
  top: 88px;
  fill: #0E9084;
  left: 438px;
  width: 14px;
  height: 14px;
  position: absolute;
}
.truthin-lending-transaction-due-diligence {
  top: 82px;
  left: 667px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-weight: 400;
}
.truthin-lending-file-due-diligence {
  top: 82px;
  left: 475px;
  color: #615a9b;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  text-decoration: underline;
}
.truthin-lending-initial-file-validation {
  top: 147px;
  left: 342px;
  color: #615a9b;
  position: absolute;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.truthin-lending-inventory {
  top: 82px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.truthin-lending-slash {
  top: 82px;
  left: 651px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}
.truthin-lending-slash1 {
  top: 82px;
  left: 459px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}
.truthin-lending-do-you-have-the-file {
  top: 298px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-do-you-have-the-file1 {
  top: 298px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-do-you-have-the-file2 {
  top: 405px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-do-you-have-the-file3 {
  top: 405px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-do-you-have-the-file4 {
  top: 512px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-do-you-have-the-file5 {
  top: 512px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-do-you-have-the-file6 {
  top: 405px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-do-you-have-the-file7 {
  top: 298px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-do-you-have-the-file8 {
  top: 191px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-is-this-an-original-contract {
  top: 191px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-is-there-anything-handwritten {
  top: 191px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.truthin-lending-save {
  top: 930px;
  left: 785px;
  right: 504px;
  width: 151px;
  bottom: 64px;
  height: 30px;
  position: absolute;
  border-color: #615a9b;
  border-radius: 12px;
  background-color: #615a9b;
}
.truthin-lending-text1 {
  top: 7px;
  left: 59px;
  color: #ffffff;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.truthin-lending-next {
  top: 930px;
  left: 1300px;
  width: 90px;
  bottom: 0px;
  height: 30px;
  border-color: #615a9b;
  border-radius: 12px;
  text-decoration: none;
}
.truthin-lending-right-arrow {
  top: 7px;
  right: 10px;
  width: 15px;
  height: 15px;
  position: absolute;
}
.truthin-lending-text2 {
  top: 7px;
  left: 28px;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.truthin-lending-textinput {
  top: 330px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-textinput01 {
  top: 330px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-textinput02 {
  top: 437px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-textinput03 {
  top: 437px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-textinput04 {
  top: 544px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-textinput05 {
  top: 544px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-textinput06 {
  top: 437px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-textinput07 {
  top: 330px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-textinput08 {
  top: 223px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-textinput09 {
  top: 223px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-textinput10 {
  top: 223px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.truthin-lending-last {
  top: 930px;
  left: 1150px;
  width: 90px;
  height: 30px;
  border-color: #615a9b;
  border-radius: 12px;
  text-decoration: none;
}
.truthin-lending-text3 {
  top: 7px;
  left: 33px;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.truthin-lending-left-arrow {
  top: 7px;
  left: 10px;
  width: 15px;
  height: 15px;
  position: absolute;
}
</style>
