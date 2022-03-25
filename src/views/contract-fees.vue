<template>
  <div class="contract-fees-container">
    <div class="contract-fees-top-nav-bar">
      <svg viewBox="0 0 1024 1024" class="contract-fees-home">
        <path d="M512 128l342 256v512h-214v-298h-256v298h-214v-512z"></path></svg
      ><svg viewBox="0 0 731.4285714285713 1024" class="contract-fees-profile">
        <path
          d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="contract-fees-settings">
        <path
          d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
        ></path>
      </svg>
      <router-link to="/" class="contract-fees-navlink">
        <img
          alt="image"
          src="/playground_assets/core%20logo%203-200h.png"
          class="contract-fees-logo"
        />
      </router-link>
    </div>
    <div class="contract-fees-side-nav-bar">
      <span class="contract-fees-loan-name">872346 Jackson Smith</span>
      <li class="contract-fees-supplementary-contracts list-item">
        <router-link to="/file-dd-21111" class="contract-fees-navlink1">
          Truth in Lending
        </router-link>
      </li>
      <li class="contract-fees-miscellaneous list-item">
        <span class="contract-fees-text">Contract &amp; Fees</span>
      </li>
      <li class="contract-fees-miscellaneous1 list-item">
        <router-link to="/file-dd-2111111" class="contract-fees-navlink2">
          Warranty
        </router-link>
      </li>
      <li class="contract-fees-miscellaneous2 list-item">
        <router-link to="/file-dd-21111111" class="contract-fees-navlink3">
          GAP
        </router-link>
      </li>
      <li class="contract-fees-miscellaneous3 list-item">
        <router-link to="/file-dd-211111111" class="contract-fees-navlink4">
          Service Contract
        </router-link>
      </li>
      <li class="contract-fees-miscellaneous4 list-item">
        <router-link to="/file-dd-2111111111" class="contract-fees-navlink5">
          Title
        </router-link>
      </li>
      <li class="contract-fees-miscellaneous5 list-item">
        <router-link to="/file-dd-21111111111" class="contract-fees-navlink6">
          GPS
        </router-link>
      </li>
      <li class="contract-fees-file-validation-signatures list-item">
        <router-link to="/file-dd-2111" class="contract-fees-navlink7">
          Data Match
        </router-link>
      </li>
      <svg viewBox="0 0 1024 1024" class="contract-fees-check">
        <path
          d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="contract-fees-check1">
        <path
          d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path>
      </svg>
    </div>
    <svg viewBox="0 0 1024 1024" class="contract-fees-check2">
      <path
        d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
      ></path>
    </svg>
    <span class="contract-fees-transaction-due-diligence">
      Transaction Due Diligence
    </span>
    <span class="contract-fees-file-due-diligence">File Due Diligence</span>
    <span class="contract-fees-initial-file-validation">Fees</span>
    <span class="contract-fees-initial-file-validation1">Contract</span>
    <router-link to="/file-val-signatures" class="contract-fees-inventory">
      Inventory
    </router-link>
    <span class="contract-fees-slash">/</span>
    <span class="contract-fees-slash1">/</span>
    <span class="contract-fees-do-you-have-the-file">Assignment?</span>
    <span class="contract-fees-do-you-have-the-file01">Stamp on Contract?</span>
    <span class="contract-fees-do-you-have-the-file02">Late fee min?</span>
    <span class="contract-fees-do-you-have-the-file03">How many grace days?</span>
    <span class="contract-fees-do-you-have-the-file04">NSF fee?</span>
    <span class="contract-fees-do-you-have-the-file05">Late fee percent?</span>
    <span class="contract-fees-do-you-have-the-file06">Late fee max?</span>
    <span class="contract-fees-do-you-have-the-file07">
      Is there a late fee structure?
    </span>
    <span class="contract-fees-do-you-have-the-file08">Sales Tax</span>
    <span class="contract-fees-do-you-have-the-file09">Contract Type</span>
    <span class="contract-fees-is-this-an-original-contract">Contract State</span>
    <span class="contract-fees-is-there-anything-handwritten">
      Interest Method
    </span>
    <button class="contract-fees-save button">
      <span class="contract-fees-text1">Save</span>
    </button>
    <router-link to="/file-dd-2111111" class="contract-fees-next button">
      <svg viewBox="0 0 1024 1024" class="contract-fees-right-arrow">
        <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
      </svg>
      <span class="contract-fees-text2">Next</span>
    </router-link>
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput01 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput02 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput03 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput04 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput05 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput06 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput07 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput08 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput09 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="contract-fees-textinput10 input"
    />
    <input type="radio" name="Stamp" class="contract-fees-radiobutton" />
    <input type="radio" name="Structure" class="contract-fees-radiobutton1" />
    <input type="radio" name="NSF" class="contract-fees-radiobutton2" />
    <input type="radio" name="Assignment" class="contract-fees-radiobutton3" />
    <input type="radio" name="Stamp" class="contract-fees-radiobutton4" />
    <input type="radio" name="Structure" class="contract-fees-radiobutton5" />
    <input type="radio" name="NSF" class="contract-fees-radiobutton6" />
    <input type="radio" name="Assignment" class="contract-fees-radiobutton7" />
    <span class="contract-fees-is-there-a-cobuyer">Yes</span>
    <span class="contract-fees-is-there-a-cobuyer1">Yes</span>
    <span class="contract-fees-is-there-a-cobuyer2">Yes</span>
    <span class="contract-fees-is-there-a-cobuyer3">Yes</span>
    <span class="contract-fees-is-there-a-cobuyer4">No</span>
    <span class="contract-fees-is-there-a-cobuyer5">No</span>
    <span class="contract-fees-is-there-a-cobuyer6">No</span>
    <span class="contract-fees-is-there-a-cobuyer7">No</span>
    <router-link to="/file-dd-21111" class="contract-fees-last button">
      <span class="contract-fees-text3">Last</span>
      <svg viewBox="0 0 1024 1024" class="contract-fees-left-arrow">
        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ContractFees',
  metaInfo: {
    title: '6. Contract & Fees - CORE DD',
    meta: [
      {
        property: 'og:title',
        content: '6. Contract & Fees - CORE DD',
      },
    ],
  },
}
</script>

<style scoped>
.contract-fees-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
}
.contract-fees-top-nav-bar {
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
.contract-fees-home {
  top: 13px;
  fill: #615a9b;
  right: 181px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.contract-fees-profile {
  top: 13px;
  fill: #615a9b;
  right: 124px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.contract-fees-settings {
  top: 13px;
  fill: #615A9B;
  right: 67px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.contract-fees-navlink {
  display: contents;
}
.contract-fees-logo {
  top: 10px;
  left: 32px;
  width: 100px;
  position: absolute;
  object-fit: cover;
  text-decoration: none;
}
.contract-fees-side-nav-bar {
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
.contract-fees-loan-name {
  top: 34px;
  left: 32px;
  position: absolute;
  font-size: 18px;
}
.contract-fees-supplementary-contracts {
  top: 134px;
  left: 32px;
  position: absolute;
}
.contract-fees-navlink1 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.contract-fees-miscellaneous {
  top: 174px;
  left: 32px;
  width: 138px;
  position: absolute;
}
.contract-fees-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.contract-fees-miscellaneous1 {
  top: 214px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.contract-fees-navlink2 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.contract-fees-miscellaneous2 {
  top: 254px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.contract-fees-navlink3 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.contract-fees-miscellaneous3 {
  top: 294px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.contract-fees-navlink4 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.contract-fees-miscellaneous4 {
  top: 334px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.contract-fees-navlink5 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.contract-fees-miscellaneous5 {
  top: 374px;
  left: 32px;
  width: 122px;
  position: absolute;
}
.contract-fees-navlink6 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.contract-fees-file-validation-signatures {
  top: 94px;
  left: 33px;
  position: absolute;
}
.contract-fees-navlink7 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.contract-fees-check {
  top: 138px;
  fill: #0E9084;
  left: 159px;
  width: 14px;
  height: 14px;
  position: absolute;
}
.contract-fees-check1 {
  top: 97px;
  fill: #0E9084;
  left: 132px;
  width: 14px;
  height: 14px;
  position: absolute;
}
.contract-fees-check2 {
  top: 88px;
  fill: #0E9084;
  left: 438px;
  width: 14px;
  height: 14px;
  position: absolute;
}
.contract-fees-transaction-due-diligence {
  top: 82px;
  left: 667px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-weight: 400;
}
.contract-fees-file-due-diligence {
  top: 82px;
  left: 475px;
  color: #615a9b;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  text-decoration: underline;
}
.contract-fees-initial-file-validation {
  top: 447px;
  left: 342px;
  color: #615a9b;
  position: absolute;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.contract-fees-initial-file-validation1 {
  top: 147px;
  left: 342px;
  color: #615a9b;
  position: absolute;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.contract-fees-inventory {
  top: 82px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
.contract-fees-slash {
  top: 82px;
  left: 651px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}
.contract-fees-slash1 {
  top: 82px;
  left: 459px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}
.contract-fees-do-you-have-the-file {
  top: 298px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-do-you-have-the-file01 {
  top: 298px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-do-you-have-the-file02 {
  top: 491px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-do-you-have-the-file03 {
  top: 491px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-do-you-have-the-file04 {
  top: 598px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-do-you-have-the-file05 {
  top: 598px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-do-you-have-the-file06 {
  top: 598px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-do-you-have-the-file07 {
  top: 491px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-do-you-have-the-file08 {
  top: 298px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-do-you-have-the-file09 {
  top: 191px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-is-this-an-original-contract {
  top: 191px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-is-there-anything-handwritten {
  top: 191px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-save {
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
.contract-fees-text1 {
  top: 7px;
  left: 59px;
  color: #ffffff;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.contract-fees-next {
  top: 930px;
  left: 1300px;
  width: 90px;
  bottom: 0px;
  height: 30px;
  border-color: #615a9b;
  border-radius: 12px;
  text-decoration: none;
}
.contract-fees-right-arrow {
  top: 7px;
  right: 10px;
  width: 15px;
  height: 15px;
  position: absolute;
}
.contract-fees-text2 {
  top: 7px;
  left: 28px;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.contract-fees-textinput {
  top: 358px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-textinput01 {
  top: 358px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-textinput02 {
  top: 523px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-textinput03 {
  top: 523px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-textinput04 {
  top: 658px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-textinput05 {
  top: 630px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-textinput06 {
  top: 630px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-textinput07 {
  top: 330px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-textinput08 {
  top: 223px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-textinput09 {
  top: 223px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-textinput10 {
  top: 223px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.contract-fees-radiobutton {
  top: 330px;
  left: 821px;
  position: absolute;
}
.contract-fees-radiobutton1 {
  top: 523px;
  left: 444px;
  position: absolute;
}
.contract-fees-radiobutton2 {
  top: 630px;
  left: 1204px;
  position: absolute;
}
.contract-fees-radiobutton3 {
  top: 330px;
  left: 1204px;
  position: absolute;
}
.contract-fees-radiobutton4 {
  top: 330px;
  left: 754px;
  position: absolute;
}
.contract-fees-radiobutton5 {
  top: 523px;
  left: 377px;
  position: absolute;
}
.contract-fees-radiobutton6 {
  top: 630px;
  left: 1139px;
  position: absolute;
}
.contract-fees-radiobutton7 {
  top: 330px;
  left: 1139px;
  position: absolute;
}
.contract-fees-is-there-a-cobuyer {
  top: 328px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-is-there-a-cobuyer1 {
  top: 521px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-is-there-a-cobuyer2 {
  top: 628px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-is-there-a-cobuyer3 {
  top: 328px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-is-there-a-cobuyer4 {
  top: 328px;
  left: 790px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-is-there-a-cobuyer5 {
  top: 521px;
  left: 413px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-is-there-a-cobuyer6 {
  top: 628px;
  left: 1171px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-is-there-a-cobuyer7 {
  top: 328px;
  left: 1171px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.contract-fees-last {
  top: 930px;
  left: 1150px;
  width: 90px;
  height: 30px;
  border-color: #615a9b;
  border-radius: 12px;
  text-decoration: none;
}
.contract-fees-text3 {
  top: 7px;
  left: 33px;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.contract-fees-left-arrow {
  top: 7px;
  left: 10px;
  width: 15px;
  height: 15px;
  position: absolute;
}
</style>
