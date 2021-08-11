<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
    import Header from '../components/header/app-header'
    import Footer from '../components/footer/app-footer'
    export default {
        name: "app-main",
        components: {Header, Footer},
    }
</script>
<style>
  :root {
    --white: rgb(255, 255, 255);
    --white-opacity: rgba(255, 255, 255, 0.9);
    --white-opacity-max: rgba(255, 255, 255, 0.1);
    --gray: #D6DEEA;
    --middle-gray: #EFF3F7;
    --black: #000;
    --middle-black: #373737; 
    --light-black: #595959;
    --blue: #005C98;
    --light-blue: #E7F0FB;
    --strong-blue: #000640;
    --middle-blue: #24284F;
    --green: #0FBD55;
    --red: #F74135;
    --white-gradient: linear-gradient(0deg, #F9FCFF, #F9FCFF), #FFFFFF;
    --blue-gradient: linear-gradient(270deg, #F9FCFF 0%, #F2F9FF 100%);
    --middle-blue-gradient: linear-gradient(0deg, #E7F0FB, #E7F0FB), #FFFFFF;
    --strong-blue-gradient: linear-gradient(0deg, #E7F0FB, #E7F0FB), linear-gradient(0deg, #F9FCFF, #F9FCFF), #C4C4C4;
    --font: 'Open Sans';
    --font-bold: 'Open Sans Bold';
    --font-semi: 'Open Sans Semi';
    --banner: url('/img/main_bg.webp');
    --mob_banner: url('/img/bg-mob.webp');
    --star_full: url('/img/stars_rate_1.png');
    --star_empty: url('/img/stars_rate_2.png');
    --faq_close: url('/img/faq_close.png');
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/OpenSans-Regular.ttf')  format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Open Sans Bold';
    src: url('/fonts/OpenSans-Bold.ttf')  format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Open Sans Semi';
    src: url('/fonts/OpenSans-SemiBold.ttf')  format('truetype');
    font-display: swap;
  }
  *{
    margin: 0px;
    padding: 0px;
    font-family: var(--font-regular);
  }
  body {
    background: var(--white);
  }
   input, textarea, button {
       outline:none;
    }
  .container {
    width: 1270px;
    margin: 0 auto;
    max-width: 90%;
  }
  img {
    max-width: 100%;
  }

/* Content */
.content {
      padding-top: 30px;
      padding-bottom: 30px;
  }
  .content h2, .content h3 {
      margin: 20px 0px;
  }
  .content ul, .content ol {
      margin-left: 30px;
      margin-bottom: 20px;
      margin-top: 20px;
      font-family: var(--font);
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
  }
  .content ul li, .content ol li {
      margin-bottom: 10px;
      line-height: 175%;
  }
  .content p {
      margin-bottom: 15px;
      font-family:  var(--font);
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 175%;
  }
  .content img {
      margin-top: 20px;
      margin-bottom: 20px;
      max-width: 100%;
  }
  .content h2, h3, h4, h5, h6 {
      text-align: center;
      font-family:  var(--font-bold);
      font-style: normal;
      font-weight: bold;
      color: var(--black);
  }
  .content blockquote {
      background: var(--middle-blue-gradient);
      padding: 35px 25px;
      border-radius: 15px;
      font-family: var(--font);
      font-style: normal;
      font-weight: normal;
      line-height: 175%;
      font-size: 15px;
      border: 1px solid var(--blue);
      margin-top: 30px;
      margin-bottom: 30px;
  }
  .cms-table {
    width: 100%;
    border-collapse: collapse;
    line-height: 1.25;
    color: #4e4e4e
}

table tr {
    transition: background-color .27s cubic-bezier(.215, .61, .355, 1) 0s
}

table td {
    color: var(--black);
    padding: 10px 15px;
    border-bottom: 1px solid var(--black);
     font-family: var(--font);
}
table tr:last-child td {
    border-bottom: none;
}
table td:first-child {
    width: 30%;
    border-right: 1px solid var(--black);
}
table th {
    font-weight: 400;
    text-align: left;
    color:var(--black);
    height: 32px;
    background-color: var(--light-blue);
    font-family: var(--font);
    font-weight: bold;
    padding: 10px 15px;
    text-align: center;
}

table {
    border: 2px solid var(--blue);
    border-radius: 4px;
}
.content table ol {
    margin-left: 5px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .content {
    overflow: hidden;
  }
}
/* End content */

  .btn_review {
    width: 180px;
    height: 46px;
    background: var(--blue);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    font-family: var(--font-bold);
    font-style: normal;
    font-size: 17px;
    line-height: 23px;
    text-align: center;
    color: var(--white);
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    line-height: 46px;
    cursor: pointer;
  }
  .casino_table_btn_wrapper {
    display: flex;
    justify-content: center;
    padding-top:40px;
    padding-bottom: 30px;
  }
</style>
