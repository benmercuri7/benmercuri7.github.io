<template>
  <div class="file-val-signatures-container">
    <div class="file-val-signatures-top-nav-bar">
      <svg viewBox="0 0 1024 1024" class="file-val-signatures-home">
        <path d="M512 128l342 256v512h-214v-298h-256v298h-214v-512z"></path></svg
      ><svg
        viewBox="0 0 731.4285714285713 1024"
        class="file-val-signatures-profile"
      >
        <path
          d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="file-val-signatures-settings">
        <path
          d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
        ></path>
      </svg>
      <router-link to="/" class="file-val-signatures-navlink">
        <img
          alt="image"
          src="/playground_assets/core%20logo%203-200h.png"
          class="file-val-signatures-logo"
        />
      </router-link>
    </div>
    <div class="file-val-signatures-side-nav-bar">
      <span class="file-val-signatures-loan-name">872346 Jackson Smith</span>
      <li class="file-val-signatures-miscellaneous list-item">
        <router-link to="/file-dd-211" class="file-val-signatures-navlink1">
          Miscellaneous
        </router-link>
      </li>
      <li class="file-val-signatures-supplementary-contracts list-item">
        <router-link to="/file-dd-21" class="file-val-signatures-navlink2">
          Supplementary Contracts
        </router-link>
      </li>
      <li class="file-val-signatures-file-validation-signatures list-item">
        <span class="file-val-signatures-text">
          File Validation &amp; Signatures
        </span>
      </li>
    </div>
    <span class="file-val-signatures-transaction-due-diligence">
      Transaction Due Diligence
    </span>
    <router-link
      to="/file-dd-2111"
      class="file-val-signatures-file-due-diligence"
    >
      File Due Diligence
    </router-link>
    <span class="file-val-signatures-signature-issues">Signature Issues</span>
    <span class="file-val-signatures-initial-file-validation">
      Initial File Validation
    </span>
    <span class="file-val-signatures-inventory">Inventory</span>
    <span class="file-val-signatures-slash">/</span>
    <span class="file-val-signatures-slash1">/</span>
    <span class="file-val-signatures-do-you-have-the-file">
      Do you have the file?
    </span>
    <span class="file-val-signatures-is-this-an-original-contract">
      Is this an original contract?
    </span>
    <span class="file-val-signatures-is-there-anything-handwritten">
      Is there anything handwritten?
    </span>
    <span class="file-val-signatures-missing-cobuyer-signature">
      Missing cobuyer signature?
    </span>
    <span class="file-val-signatures-missing-buyer-signature">
      Missing buyer signature?
    </span>
    <span class="file-val-signatures-missing-initials">Missing initials?</span>
    <span class="file-val-signatures-missing-dealer-signature">
      Missing dealer signature?
    </span>
    <span class="file-val-signatures-missing-signatures">
      Missing signatures?
    </span>
    <span class="file-val-signatures-is-there-a-cobuyer">
      Is there a cobuyer?
    </span>
    <span class="file-val-signatures-is-there-a-cobuyer01">No</span>
    <span class="file-val-signatures-is-there-a-cobuyer02">No</span>
    <span class="file-val-signatures-is-there-a-cobuyer03">No</span>
    <span class="file-val-signatures-is-there-a-cobuyer04">No</span>
    <span class="file-val-signatures-is-there-a-cobuyer05">No</span>
    <span class="file-val-signatures-is-there-a-cobuyer06">No</span>
    <span class="file-val-signatures-is-there-a-cobuyer07">No</span>
    <span class="file-val-signatures-is-there-a-cobuyer08">No</span>
    <span class="file-val-signatures-is-there-a-cobuyer09">No</span>
    <span class="file-val-signatures-is-there-a-cobuyer10">Yes</span>
    <span class="file-val-signatures-is-there-a-cobuyer11">Yes</span>
    <span class="file-val-signatures-is-there-a-cobuyer12">Yes</span>
    <span class="file-val-signatures-is-there-a-cobuyer13">Yes</span>
    <span class="file-val-signatures-is-there-a-cobuyer14">Yes</span>
    <span class="file-val-signatures-is-there-a-cobuyer15">Yes</span>
    <span class="file-val-signatures-is-there-a-cobuyer16">Yes</span>
    <span class="file-val-signatures-is-there-a-cobuyer17">Yes</span>
    <span class="file-val-signatures-is-there-a-cobuyer18">Yes</span>
    <button class="file-val-signatures-save button">
      <span class="file-val-signatures-text1">Save</span>
    </button>
    <span class="file-val-signatures-buyer-entity">Buyer Entity</span>
    <input
      type="text"
      placeholder="placeholder"
      class="file-val-signatures-textinput input"
    />
    <span class="file-val-signatures-type-of-form">Type of form</span>
    <input
      type="text"
      placeholder="placeholder"
      class="file-val-signatures-textinput1 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="file-val-signatures-textinput2 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="file-val-signatures-textinput3 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="file-val-signatures-textinput4 input"
    />
    <input
      type="text"
      placeholder="placeholder"
      class="file-val-signatures-textinput5 input"
    />
    <router-link to="/file-dd-21" class="file-val-signatures-next button">
      <svg viewBox="0 0 1024 1024" class="file-val-signatures-right-arrow">
        <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
      </svg>
      <span class="file-val-signatures-text2">Next</span>
    </router-link>
    <input type="radio" name="File" class="file-val-signatures-radiobutton" />
    <input type="radio" name="File" class="file-val-signatures-radiobutton01" />
    <input
      type="radio"
      name="cobuyer"
      class="file-val-signatures-radiobutton02"
    />
    <input
      type="radio"
      name="cobuyer"
      class="file-val-signatures-radiobutton03"
    />
    <input
      type="radio"
      name="signature"
      class="file-val-signatures-radiobutton04"
    />
    <input
      type="radio"
      name="initials"
      class="file-val-signatures-radiobutton05"
    />
    <input type="radio" name="dealer" class="file-val-signatures-radiobutton06" />
    <input
      type="radio"
      name="cobuyer2"
      class="file-val-signatures-radiobutton07"
    />
    <input type="radio" name="buyer" class="file-val-signatures-radiobutton08" />
    <input
      type="radio"
      name="contract"
      class="file-val-signatures-radiobutton09"
    />
    <input
      type="radio"
      name="contract"
      class="file-val-signatures-radiobutton10"
    />
    <input type="radio" name="hand" class="file-val-signatures-radiobutton11" />
    <input type="radio" name="hand" class="file-val-signatures-radiobutton12" />
    <input
      type="radio"
      name="signature"
      class="file-val-signatures-radiobutton13"
    />
    <input
      type="radio"
      name="initials"
      class="file-val-signatures-radiobutton14"
    />
    <input type="radio" name="dealer" class="file-val-signatures-radiobutton15" />
    <input
      type="radio"
      name="cobuyer2"
      class="file-val-signatures-radiobutton16"
    />
    <input type="radio" name="buyer" class="file-val-signatures-radiobutton17" />
  </div>
</template>

<script>
export default {
  name: 'FileValSignatures',
  metaInfo: {
    title: '1. File Val. & Signatures - CORE DD',
    meta: [
      {
        property: 'og:title',
        content: '1. File Val. & Signatures - CORE DD',
      },
    ],
  },
}
</script>

<style scoped>
.file-val-signatures-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
}
.file-val-signatures-top-nav-bar {
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
.file-val-signatures-home {
  top: 13px;
  fill: #615a9b;
  right: 181px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.file-val-signatures-profile {
  top: 13px;
  fill: #615a9b;
  right: 124px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.file-val-signatures-settings {
  top: 13px;
  fill: #615A9B;
  right: 67px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.file-val-signatures-navlink {
  display: contents;
}
.file-val-signatures-logo {
  top: 10px;
  left: 32px;
  width: 100px;
  position: absolute;
  object-fit: cover;
  text-decoration: none;
}
.file-val-signatures-side-nav-bar {
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
.file-val-signatures-loan-name {
  top: 34px;
  left: 32px;
  position: absolute;
  font-size: 18px;
}
.file-val-signatures-miscellaneous {
  top: 174px;
  left: 32px;
  position: absolute;
}
.file-val-signatures-navlink1 {
  font-size: 12px;
  text-decoration: none;
}
.file-val-signatures-supplementary-contracts {
  top: 134px;
  left: 32px;
  position: absolute;
}
.file-val-signatures-navlink2 {
  font-size: 12px;
  text-decoration: none;
}
.file-val-signatures-file-validation-signatures {
  top: 94px;
  left: 33px;
  position: absolute;
}
.file-val-signatures-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.file-val-signatures-transaction-due-diligence {
  top: 82px;
  left: 648px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-weight: 400;
}
.file-val-signatures-file-due-diligence {
  top: 82px;
  left: 456px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
}
.file-val-signatures-signature-issues {
  top: 395px;
  left: 342px;
  color: #615a9b;
  position: absolute;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.file-val-signatures-initial-file-validation {
  top: 147px;
  left: 342px;
  color: #615a9b;
  position: absolute;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.file-val-signatures-inventory {
  top: 82px;
  left: 342px;
  color: #615a9b;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  text-decoration: underline;
}
.file-val-signatures-slash {
  top: 82px;
  left: 632px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}
.file-val-signatures-slash1 {
  top: 82px;
  left: 440px;
  color: #000000;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}
.file-val-signatures-do-you-have-the-file {
  top: 191px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-this-an-original-contract {
  top: 191px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-anything-handwritten {
  top: 191px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-missing-cobuyer-signature {
  top: 439px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-missing-buyer-signature {
  top: 439px;
  left: 720px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-missing-initials {
  top: 571px;
  left: 720px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-missing-dealer-signature {
  top: 571px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-missing-signatures {
  top: 439px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer {
  top: 278px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer01 {
  top: 221px;
  left: 413px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer02 {
  top: 310px;
  left: 413px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer03 {
  top: 468px;
  left: 413px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer04 {
  top: 602px;
  left: 791px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer05 {
  top: 607px;
  left: 413px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer06 {
  top: 468px;
  left: 1171px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer07 {
  top: 468px;
  left: 791px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer08 {
  top: 221px;
  left: 791px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer09 {
  top: 221px;
  left: 1171px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer10 {
  top: 221px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer11 {
  top: 310px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer12 {
  top: 468px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer13 {
  top: 602px;
  left: 720px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer14 {
  top: 607px;
  left: 342px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer15 {
  top: 468px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer16 {
  top: 468px;
  left: 720px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer17 {
  top: 221px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-is-there-a-cobuyer18 {
  top: 221px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-save {
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
.file-val-signatures-text1 {
  top: 7px;
  left: 59px;
  color: #ffffff;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.file-val-signatures-buyer-entity {
  top: 278px;
  left: 1100px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-textinput {
  top: 310px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.file-val-signatures-type-of-form {
  top: 278px;
  left: 719px;
  color: #000000;
  position: absolute;
  font-size: 14px;
  font-weight: 200;
}
.file-val-signatures-textinput1 {
  top: 498px;
  left: 1100px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.file-val-signatures-textinput2 {
  top: 638px;
  left: 720px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.file-val-signatures-textinput3 {
  top: 638px;
  left: 342px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.file-val-signatures-textinput4 {
  top: 498px;
  left: 720px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.file-val-signatures-textinput5 {
  top: 310px;
  left: 719px;
  width: 277px;
  height: 30px;
  position: absolute;
  font-size: 12px;
  border-color: #615a9b;
  border-radius: 10px;
}
.file-val-signatures-next {
  top: 930px;
  left: 1300px;
  width: 90px;
  bottom: 0px;
  height: 30px;
  border-color: #615a9b;
  border-radius: 12px;
  text-decoration: none;
}
.file-val-signatures-right-arrow {
  top: 7px;
  right: 10px;
  width: 15px;
  height: 15px;
  position: absolute;
}
.file-val-signatures-text2 {
  top: 7px;
  left: 28px;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.file-val-signatures-radiobutton {
  top: 223px;
  left: 377px;
  position: absolute;
}
.file-val-signatures-radiobutton01 {
  top: 223px;
  left: 444px;
  position: absolute;
}
.file-val-signatures-radiobutton02 {
  top: 312px;
  left: 377px;
  position: absolute;
}
.file-val-signatures-radiobutton03 {
  top: 312px;
  left: 444px;
  position: absolute;
}
.file-val-signatures-radiobutton04 {
  top: 470px;
  left: 377px;
  position: absolute;
}
.file-val-signatures-radiobutton05 {
  top: 604px;
  left: 755px;
  position: absolute;
}
.file-val-signatures-radiobutton06 {
  top: 609px;
  left: 377px;
  position: absolute;
}
.file-val-signatures-radiobutton07 {
  top: 470px;
  left: 1139px;
  position: absolute;
}
.file-val-signatures-radiobutton08 {
  top: 470px;
  left: 755px;
  position: absolute;
}
.file-val-signatures-radiobutton09 {
  top: 223px;
  left: 757px;
  position: absolute;
}
.file-val-signatures-radiobutton10 {
  top: 223px;
  left: 824px;
  position: absolute;
}
.file-val-signatures-radiobutton11 {
  top: 223px;
  left: 1136px;
  position: absolute;
}
.file-val-signatures-radiobutton12 {
  top: 223px;
  left: 1204px;
  position: absolute;
}
.file-val-signatures-radiobutton13 {
  top: 470px;
  left: 444px;
  position: absolute;
}
.file-val-signatures-radiobutton14 {
  top: 604px;
  left: 822px;
  position: absolute;
}
.file-val-signatures-radiobutton15 {
  top: 609px;
  left: 444px;
  position: absolute;
}
.file-val-signatures-radiobutton16 {
  top: 470px;
  left: 1204px;
  position: absolute;
}
.file-val-signatures-radiobutton17 {
  top: 470px;
  left: 822px;
  position: absolute;
}
</style>
