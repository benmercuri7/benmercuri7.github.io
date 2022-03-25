<template>
  <div class="data-match-container">
    <div class="data-match-top-nav-bar">
      <svg viewBox="0 0 1024 1024" class="data-match-home">
        <path d="M512 128l342 256v512h-214v-298h-256v298h-214v-512z"></path></svg
      ><svg viewBox="0 0 731.4285714285713 1024" class="data-match-profile">
        <path
          d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="data-match-settings">
        <path
          d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
        ></path>
      </svg>
      <router-link to="/" class="data-match-navlink">
        <img
          alt="image"
          src="/playground_assets/core%20logo%203-200h.png"
          class="data-match-logo"
        />
      </router-link>
    </div>
    <div class="data-match-side-nav-bar">
      <span class="data-match-loan-name">872346 Jackson Smith</span>
      <li class="data-match-supplementary-contracts list-item">
        <router-link to="/file-dd-21111" class="data-match-navlink1">
          Truth in Lending
        </router-link>
      </li>
      <li class="data-match-miscellaneous list-item">
        <router-link to="/file-dd-211111" class="data-match-navlink2">
          Contract &amp; Fees
        </router-link>
      </li>
      <li class="data-match-miscellaneous1 list-item">
        <router-link to="/file-dd-2111111" class="data-match-navlink3">
          Warranty
        </router-link>
      </li>
      <li class="data-match-miscellaneous2 list-item">
        <router-link to="/file-dd-21111111" class="data-match-navlink4">
          GAP
        </router-link>
      </li>
      <li class="data-match-miscellaneous3 list-item">
        <router-link to="/file-dd-211111111" class="data-match-navlink5">
          Service Contract
        </router-link>
      </li>
      <li class="data-match-miscellaneous4 list-item">
        <router-link to="/file-dd-2111111111" class="data-match-navlink6">
          Title
        </router-link>
      </li>
      <li class="data-match-miscellaneous5 list-item">
        <router-link to="/file-dd-21111111111" class="data-match-navlink7">
          GPS
        </router-link>
      </li>
      <li class="data-match-file-validation-signatures list-item">
        <span class="data-match-text">Data Match</span>
      </li>
    </div>
    <svg viewBox="0 0 1024 1024" class="data-match-check">
      <path
        d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
      ></path>
    </svg>
    <span class="data-match-transaction-due-diligence">
      Transaction Due Diligence
    </span>
    <span class="data-match-file-due-diligence">File Due Diligence</span>
    <span class="data-match-initial-file-validation">Data Match</span>
    <router-link to="/file-val-signatures" class="data-match-inventory">
      Inventory
    </router-link>
    <span class="data-match-slash">/</span>
    <span class="data-match-slash1">/</span>
    <span class="data-match-do-you-have-the-file">Year</span>
    <span class="data-match-do-you-have-the-file1">Make</span>
    <span class="data-match-do-you-have-the-file2">Mileage</span>
    <span class="data-match-do-you-have-the-file3">Model</span>
    <span class="data-match-do-you-have-the-file4">Dealer Name</span>
    <span class="data-match-do-you-have-the-file5">Buyer</span>
    <span class="data-match-is-this-an-original-contract">Cobuyer</span>
    <span class="data-match-is-there-anything-handwritten">VIN</span>
    <button class="data-match-save button">
      <span class="data-match-text1">Save</span>
    </button>
    <router-link to="/file-dd-21111" class="data-match-next button">
      <svg viewBox="0 0 1024 1024" class="data-match-right-arrow">
        <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
      </svg>
      <span class="data-match-text2">Next</span>
    </router-link>
    <input
      type="text"
      placeholder="If Different"
      class="data-match-textinput input"
    />
    <input
      type="text"
      placeholder="If Different"
      class="data-match-textinput01 input"
    />
    <input
      type="text"
      placeholder="If Different"
      class="data-match-textinput02 input"
    />
    <input
      type="text"
      placeholder="If Different"
      class="data-match-textinput03 input"
    />
    <input
      type="text"
      placeholder="If Different"
      class="data-match-textinput04 input"
    />
    <input
      type="text"
      placeholder="If Different"
      class="data-match-textinput05 input"
    />
    <input
      type="text"
      placeholder="If Different"
      class="data-match-textinput06 input"
    />
    <input
      type="text"
      placeholder="If Different"
      class="data-match-textinput07 input"
    />
    <input
      type="text"
      placeholder="DFW Auto Franchise"
      class="data-match-textinput08 input"
    />
    <input type="text" placeholder="Camry" class="data-match-textinput09 input" />
    <input
      type="text"
      placeholder="67,000"
      class="data-match-textinput10 input"
    />
    <input
      type="text"
      placeholder="Toyota"
      class="data-match-textinput11 input"
    />
    <input type="text" placeholder="2017" class="data-match-textinput12 input" />
    <input
      type="text"
      placeholder="Jackson Smith"
      class="data-match-textinput13 input"
    />
    <input
      type="text"
      placeholder="Dave Johnson"
      class="data-match-textinput14 input"
    />
    <input
      type="text"
      placeholder="134762"
      class="data-match-textinput15 input"
    />
    <router-link to="/file-dd-211" class="data-match-last button">
      <span class="data-match-text3">Last</span>
      <svg viewBox="0 0 1024 1024" class="data-match-left-arrow">
        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DataMatch',
  metaInfo: {
    title: '4. Data Match - CORE DD',
    meta: [
      {
        property: 'og:title',
        content: '4. Data Match - CORE DD',
      },
    ],
  },
}
</script>

<style scoped>
.data-match-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
}
.data-match-top-nav-bar {
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
.data-match-home {
  top: 13px;
  fill: #615a9b;
  right: 181px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.data-match-profile {
  top: 13px;
  fill: #615a9b;
  right: 124px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.data-match-settings {
  top: 13px;
  fill: #615A9B;
  right: 67px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.data-match-navlink {
  display: contents;
}
.data-match-logo {
  top: 10px;
  left: 32px;
  width: 100px;
  position: absolute;
  object-fit: cover;
  text-decoration: none;
}
.data-match-side-nav-bar {
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
.data-match-loan-name {
  top: 34px;
  left: 32px;
  position: absolute;
  font-size: 18px;
}
.data-match-supplementary-contracts {
  top: 134px;
  left: 32px;
  position: absolute;
}
.data-match-navlink1 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.data-match-miscellaneous {
  top: 174px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.data-match-navlink2 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.data-match-miscellaneous1 {
  top: 214px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.data-match-navlink3 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.data-match-miscellaneous2 {
  top: 254px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.data-match-navlink4 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.data-match-miscellaneous3 {
  top: 294px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.data-match-navlink5 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.data-match-miscellaneous4 {
  top: 334px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.data-match-navlink6 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.data-match-miscellaneous5 {
  top: 374px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.data-match-navlink7 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.data-match-file-validation-signatures {
  top: 94px;
  left: 33px;
  position: absolute;
}
.data-match-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.data-match-check {
  top: 88px;
  fill: #0E9084;
  left: 438px;
  width: 14px;
  height: 14px;
  position: absolute;
}
.data-match-transaction-due-diligence {
  top: 82px;
  left: 667px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-weight: 400;
}
.data-match-file-due-diligence {
  top: 82px;
  left: 475px;
  color: #615a9b;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  text-decoration: underline;
}
.data-match-initial-file-validation {
  top: 147px;
  left: 342px;
  color: #615a9b;
  position: absolute;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.data-match-inventory {
  top: 82px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.data-match-slash {
  top: 82px;
  left: 651px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}
.data-match-slash1 {
  top: 82px;
  left: 459px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}
.data-match-do-you-have-the-file {
  top: 343px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.data-match-do-you-have-the-file1 {
  top: 343px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.data-match-do-you-have-the-file2 {
  top: 495px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.data-match-do-you-have-the-file3 {
  top: 495px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.data-match-do-you-have-the-file4 {
  top: 343px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.data-match-do-you-have-the-file5 {
  top: 191px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.data-match-is-this-an-original-contract {
  top: 191px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.data-match-is-there-anything-handwritten {
  top: 191px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.data-match-save {
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
.data-match-text1 {
  top: 7px;
  left: 59px;
  color: #ffffff;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.data-match-next {
  top: 930px;
  left: 1300px;
  width: 90px;
  bottom: 0px;
  height: 30px;
  border-color: #615a9b;
  border-radius: 12px;
  text-decoration: none;
}
.data-match-right-arrow {
  top: 7px;
  right: 10px;
  width: 15px;
  height: 15px;
  position: absolute;
}
.data-match-text2 {
  top: 7px;
  left: 28px;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.data-match-textinput {
  top: 420px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.data-match-textinput01 {
  top: 572px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.data-match-textinput02 {
  top: 572px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.data-match-textinput03 {
  top: 420px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.data-match-textinput04 {
  top: 420px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.data-match-textinput05 {
  top: 268px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.data-match-textinput06 {
  top: 268px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.data-match-textinput07 {
  top: 268px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.data-match-textinput08 {
  top: 375px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-width: 0px;
  border-radius: 10px;
  background-color: #e2e2e2;
}
.data-match-textinput09 {
  top: 527px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-width: 0px;
  border-radius: 10px;
  background-color: #e2e2e2;
}
.data-match-textinput10 {
  top: 527px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-width: 0px;
  border-radius: 10px;
  background-color: #e2e2e2;
}
.data-match-textinput11 {
  top: 375px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-width: 0px;
  border-radius: 10px;
  background-color: #e2e2e2;
}
.data-match-textinput12 {
  top: 375px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-width: 0px;
  border-radius: 10px;
  background-color: #e2e2e2;
}
.data-match-textinput13 {
  top: 223px;
  left: 342px;
  color: #000000;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-width: 0px;
  border-radius: 10px;
  background-color: #e2e2e2;
}
.data-match-textinput14 {
  top: 223px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-width: 0px;
  border-radius: 10px;
  background-color: #e2e2e2;
}
.data-match-textinput15 {
  top: 223px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-width: 0px;
  border-radius: 10px;
  background-color: #e2e2e2;
}
.data-match-last {
  top: 930px;
  left: 1150px;
  width: 90px;
  height: 30px;
  border-color: #615a9b;
  border-radius: 12px;
  text-decoration: none;
}
.data-match-text3 {
  top: 7px;
  left: 33px;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.data-match-left-arrow {
  top: 7px;
  left: 10px;
  width: 15px;
  height: 15px;
  position: absolute;
}
</style>
