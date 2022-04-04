<template>
  
    <div class="grid-content banner">
        <el-row class="close sticky-top">
        <el-col :span="24">
          <div class="grid-content nav">
            <el-breadcrumb class="link" separator="/">
                <el-breadcrumb-item :to="{ name: 'Index' }"> <img  class="IconImg back" src="../assets/left.png"> 首頁</el-breadcrumb-item>
                <el-breadcrumb-item
                  >系統操作說明檔案匯入及分析操作</el-breadcrumb-item
                >
              </el-breadcrumb>
            <div class="menu">
            <router-link :to="{ name: 'Login' }" class="link">
              <el-button round type="danger" class="fz-20">登入授權碼</el-button>
            </router-link>
            </div>
          </div>
        </el-col>
      </el-row>
      <!--step start-->
      <el-row>
        <el-col>
            <div class="form-wizard-wrapper">
          <ul>
            <li><a class="form-wizard-link active" href="javascript:;" data-attr="info"><span>第一步驟</span></a></li>
            <li><a class="form-wizard-link" href="javascript:;" data-attr="ads"><span>第二步驟</span></a></li>
            <li><a class="form-wizard-link" href="javascript:;" data-attr="placement"><span>第三步驟</span></a></li>
            <li><a class="form-wizard-link" href="javascript:;" data-attr="schedule"><span>第四步驟</span></a></li>
            <li><a class="form-wizard-link" href="javascript:;" data-attr="review"><span>第五步驟</span></a></li>
            <li class="form-wizardmove-button"></li>
          </ul>
          <div class="form-wizard-content-wrapper">
            <div class="form-wizard-content show" data-tab-content="info">
              <form action="#">
                <h2 class="step1title">系統操作說明</h2><br>
                <div class="form-row">
                  <div class="form-column" style="display:flex">
                    <img src="../assets/homestart.png" style="width:100%" alt="">
                    <!-- <input type="text" class="text-field"> -->
                  </div>
                  <div class="form-column txt">
                    <h4>● 點選頁面右上角「TRANS圖標」 或首頁「GET START !」 按鈕，進入「資料集」。</h4>
                    <!-- <label for="">Last Name</label>
                    <input type="text" class="text-field"> -->
                  </div>
                  <div class="form-column mt-2">
                     <img src="../assets/exampledataset.png" style="width:100%" alt="">
                  </div>
                  <div class="form-column mt-2 txt">
                    <div>
                    <h4>● 「未輸入授權碼」時，系統僅提供系統預設或其他使用者公開之「範例資料集」給使用者「進行分析」。</h4>
                    <h4>● 使用者於「範例資料集表格」中，可以查看各資料集之資料集「新增日期」、「名稱」、「統計開始時間」、「統計截止時間」、「提供單位」、「是否公開」、和「進行分析」。</h4>
                    <h4>● 若您無授權碼且欲使用範例資料集進行本系統之操作，請直接跳至第三步驟，為您解說系統後續之操作方式。</h4>
                    </div>
                  </div>
                  <div class="form-column mt-2">
                     <img src="../assets/login.png" style="width:100%" alt="">
                  </div>
                  <div class="form-column mt-2 txt">
                    <div>
                    <h4>● 若使用者已購買此系統且有授權碼，點選頁面右上方「登入授權碼」並輸入您的授權碼，即可「自訂資料集」和「查看歷史紀錄資料」。</h4>
                    <h4>※自訂資料集 : 使用者可以將自身資料集上傳，在系統中進行資料之分析。</h4>
                    <h4>※查看歷史紀錄資料 : 使用者可以查看過去瀏覽之分析資訊。</h4>
                   </div>
                  </div>
                  <div class="form-column mt-2">
                     <img src="../assets/datasetcustomize.png" style="width:100%" alt="">
                  </div>
                  <div class="form-column mt-2 txt">
                    <div>
                    <h4>● 使用者於「自訂資料集表格」中，可以查看各資料集之資料集「新增日期」、「名稱」、「統計開始時間」、「統計截止時間」、「提供單位」、「是否公開」、「上傳資料」、「進行分析」、和「刪除」。</h4>
                    <h4>※自訂資料集之操作請至第二步驟，為您解說系統之操作方式。</h4>
                   </div>
                  </div>
                  <div class="form-column mt-2">
                     <img src="../assets/history.png" style="width:100%" alt="">
                  </div>
                  <div class="form-column mt-2 txt">
                    <h4>● 使用者於「歷史資料集表格」中，可以查看各資料集之資料集「新增日期」、「名稱」、「統計開始時間」、「統計截止時間」、「提供單位」、「是否公開」、「查看分析」、和「刪除」。</h4>
                  </div>
                  <div class="full-wdth clearfix">
                    <a href="javascript:;" class="form-wizard-next-btn float-right">下一步</a>
                  </div>
                </div>
              </form>
            </div>
            <div class="form-wizard-content" data-tab-content="ads">
              <form action="#">
                <h6>Ads</h6>
                <div class="form-row">
                  <div class="form-column">
                    <label for="">First Name</label>
                    <input type="text" class="text-field">
                  </div>
                  <div class="form-column">
                    <label for="">Last Name</label>
                    <input type="text" class="text-field">
                  </div>
                  <div class="full-wdth clearfix">
                    <a href="javascript:;" class="form-wizard-previous-btn float-left">回上一步</a>
                    <a href="javascript:;" class="form-wizard-next-btn float-right">下一步</a>
                  </div>
                </div>
              </form>
            </div>
            <div class="form-wizard-content" data-tab-content="placement">
              <form action="#">
                <h6>Placement</h6>
                <div class="form-row">
                  <div class="form-column">
                    <label for="">First Name</label>
                    <input type="text" class="text-field">
                  </div>
                  <div class="form-column">
                    <label for="">Last Name</label>
                    <input type="text" class="text-field">
                  </div>
                  <div class="full-wdth clearfix">
                    <a href="javascript:;" class="form-wizard-previous-btn float-left">回上一步</a>
                    <a href="javascript:;" class="form-wizard-next-btn float-right">下一步</a>
                  </div>
                </div>
              </form>
            </div>
            <div class="form-wizard-content" data-tab-content="schedule">
              <form action="#">
                <h6>Schedule</h6>
                <div class="form-row">
                  <div class="form-column">
                    <label for="">First Name</label>
                    <input type="text" class="text-field">
                  </div>
                  <div class="form-column">
                    <label for="">Last Name</label>
                    <input type="text" class="text-field">
                  </div>
                  <div class="full-wdth clearfix">
                    <a href="javascript:;" class="form-wizard-previous-btn float-left">回上一步</a>
                    <a href="javascript:;" class="form-wizard-next-btn float-right">下一步</a>
                  </div>
                </div>
              </form>
            </div>
            <div class="form-wizard-content" data-tab-content="review">
              <form action="#">
                <h6>Review</h6>
                <div class="form-row">
                  <div class="form-column">
                    <label for="">First Name</label>
                    <input type="text" class="text-field">
                  </div>
                  <div class="form-column">
                    <label for="">Last Name</label>
                    <input type="text" class="text-field">
                  </div>
                  <div class="full-wdth clearfix">
                    <a href="javascript:;" class="form-wizard-previous-btn float-left">回上一步</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </el-col>
      </el-row>
      <!-- <el-row>
        <el-col :span="7"> </el-col>
        <el-col :span="10" class="step_box">
          <el-steps :active="active" finish-status="success">
            <el-step title="Step 1" class="translate" />
            <el-step title="Step 2" class="translate" />
            <el-step title="Step 3" />
          </el-steps>
          <div class="step_con">
            <el-button
              style="margin-top: 12px"
              @click="next"
              plain
              round
              type="danger"
              >下一步</el-button
            >
          </div>
        </el-col>
        <el-col :span="7"> </el-col>
      </el-row> -->
    </div>
</template>


<script>
jQuery(document).ready(function() {

			jQuery('.form-wizard-wrapper').find('.form-wizard-link').click(function(){
				jQuery('.form-wizard-link').removeClass('active');
				var innerWidth = jQuery(this).innerWidth();
				jQuery(this).addClass('active');
				var position = jQuery(this).position();
				jQuery('.form-wizardmove-button').css({"left": position.left, "width": innerWidth});
				var attr = jQuery(this).attr('data-attr');
				jQuery('.form-wizard-content').each(function(){
					if (jQuery(this).attr('data-tab-content') == attr) {
						jQuery(this).addClass('show');
					}else{
						jQuery(this).removeClass('show');
					}
				});
			});
			jQuery('.form-wizard-next-btn').click(function() {
				var next = jQuery(this);
				next.parents('.form-wizard-content').removeClass('show');
				next.parents('.form-wizard-content').next('.form-wizard-content').addClass('show');
				jQuery(document).find('.form-wizard-content').each(function(){
					if(jQuery(this).hasClass('show')){
						var formAtrr = jQuery(this).attr('data-tab-content');
						jQuery(document).find('.form-wizard-wrapper li a').each(function(){
							if(jQuery(this).attr('data-attr') == formAtrr){
								jQuery(this).addClass('active');
								var innerWidth = jQuery(this).innerWidth();
								var position = jQuery(this).position();
								jQuery(document).find('.form-wizardmove-button').css({"left": position.left, "width": innerWidth});
							}else{
								jQuery(this).removeClass('active');
							}
						});
					}
				});
			});
			jQuery('.form-wizard-previous-btn').click(function() {
				var prev =jQuery(this);
				prev.parents('.form-wizard-content').removeClass('show');
				prev.parents('.form-wizard-content').prev('.form-wizard-content').addClass('show');
				jQuery(document).find('.form-wizard-content').each(function(){
					if(jQuery(this).hasClass('show')){
						var formAtrr = jQuery(this).attr('data-tab-content');
						jQuery(document).find('.form-wizard-wrapper li a').each(function(){
							if(jQuery(this).attr('data-attr') == formAtrr){
								jQuery(this).addClass('active');
								var innerWidth = jQuery(this).innerWidth();
								var position = jQuery(this).position();
								jQuery(document).find('.form-wizardmove-button').css({"left": position.left, "width": innerWidth});
							}else{
								jQuery(this).removeClass('active');
							}
						});
					}
				});
			});
		});
</script>

<style lang="scss">
.el-step__title {
  text-align: center;
}
.el-step__line {
  transform: translateX(50%);
}
.translate {
  transform: translateX(-50%);
}
.el-step__icon {
  width: 40px !important;
  height: 40px !important;
  margin-top: -1.5em;
}
.step_con {
  width: 100%;
  height: 600px;
  margin-top: 3em;
  background: #f7f7fa;
  display: flex;
  align-items: flex-end;
  padding: 2em 1em;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 30px;
}
.step_box {
  margin-top: 6em;
}
.column_input {
  width: 60%;
}
.el-form-item {
  & .manage-btn {
    width: auto;
  }
}
.el-form-item__content {
  margin-left: 0 !important;
}
.manage-btn {
  width: 25%;
  display: flex;
  justify-content: space-between;
  // background: #b3c0d1;
  margin-top: 3em;
  & span {
    margin-top: 0;
    font-size: 1.25em;
  }
}
.ban-title {
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // & span{
  //   display: inline-block;
  //   margin-top: 3em;
  // }
}
.banner {
  // background: rgb(226, 226, 216);
  height: 120vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url(../assets/snadescribe.jpg);
  background-size: cover;
  background-position: center;
  color: white;
  & h1 {
    font-size: 4em;
    font-weight: bolder;
    letter-spacing: 10px;
    text-indent: 10px;
  }
}
.con {
  width: 100%;
  height: 90vh;
  background: #e9eef3;
  display: grid;
  place-items: center;
}
.config-form {
  width: 70%;
  margin: auto;
  padding: 2em 2em;
  background: #fff;
  border-radius: 10px;
}
.AddDataSetForm {
  background: lightblue;
  width: 80%;
  margin: 100px auto;
}
.ban-title {
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & span {
    display: inline-block;
    margin-top: 3em;
  }
}
.menu {
  width: 30%;
  display: flex;
  justify-content: flex-end;
}
.close {
  margin-bottom: 0 !important;
}
.account-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
}
.nav {
  width: 100%;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 8px 8px 15px rgb(0, 0, 0, 0.6);
  border-radius: 0 !important;
  background: transparent;
  box-sizing: border-box;
}
#logo {
  padding: 0.5em 1em;
  background-color: transparent;
  font-weight: bold;
  letter-spacing: 4px;
  text-indent: 4px;
  font-size: 1.25em;
  color: #fc6471 !important;
}
button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  font-size: 1.25em;
  font-weight: bolder;
  border: 0;
  background-color: #fc6471;
  color: white;
  letter-spacing: 3px;
  text-indent: 3px;
}
.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.account-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
}
#logo {
  padding: 0.5em 1em;
  background-color: transparent;
  font-weight: bold;
  letter-spacing: 4px;
  text-indent: 4px;
  font-size: 1.25em;
  color: white;
}

.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  margin-bottom: 0;
}
.bg-purple-dark {
  background: #99a9bf;
}
.grid-content {
  min-height: 36px;
}
.link {
  text-decoration: none;
  margin: 0 10px;
  font-size: 25px;
  color: #10afafca;
  font-weight: bold;
}
.fz-20 {
  font-size: 22px;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
  background: #fff;
}
.IconImg{
  vertical-align:baseline;
}
.describebg{
  background-image: url(../assets/snadescribe.jpg);
  padding: 0 200px;
}
.describecontent{
  margin:50px auto;
  background: #ffffff;
  padding: 20px 100px;
  border-radius: 3%;
  text-align: left;
  font-size: 20px;
  line-height: 1.8;
}
.describetitle{
  font-weight: bold;
  font-size: 25px;
  text-align: center;
}
.green{  
  color: #10afafca;
  font-weight: bold;
}
.back{
  width:25px;
  height:25px;
  vertical-align:middle;
}

body{
  background-color: #eeeeee;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
}
*{
			box-sizing: border-box;
		}
		.clearfix:after{
			display: blockl
			con
		}
		.form-column {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 50%;
			flex: 0 0 50%;
			max-width: 50%;
		}
		.full-wdth{
			width: 100%;
		}
		.form-column, .full-wdth {
			position: relative;
			min-height: 1px;
			padding-right: 15px;
			padding-left: 15px;
      margin-bottom: 10px;
		}
		.float-right{
			float: right;
		}
		.float-left{
			float: left;
		}
		label {
			display: inline-block;
			margin-bottom: .5rem;
		}
		.form-row {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			margin-right: -15px;
			margin-left: -15px;
		}
		.form-wizard-wrapper {
			max-width: 1200px;
			margin: 0 auto;
			overflow: hidden;
			position: relative;
			padding-top: 8px;
			z-index: 1;
      margin-top: 100px;
      font-size: 20px;
      font-weight: bold;
		}
		.form-wizard-wrapper .form-wizardmove-button {
			position: absolute;
			width: 220px;
			left: 0;
			top: -4px;
			bottom: -4px;
			border-radius: 4px;
			background-color: #6f6fa7;
			-webkit-transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;
			-moz-transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;
			-ms-transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;
			-o-transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;
			transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;
		
		}
		.form-wizard-wrapper ul {
			background-color: #3bb6b6;
			z-index: 1;
			border-radius: 4px;
			display: flex;
			justify-content: center;
			position: relative;
			margin: 0;
			padding: 0;
		}
		.form-wizard-wrapper ul li {
			list-style-type: none;
			width: 100%;
			text-align: center;
			display: flex;
			justify-content: center;
		}
		.form-wizard-wrapper ul li a {
			display: block;
			padding: 10px;
			width: 100%;
			color: #ffffff;
			text-decoration: none;
		}
		.form-wizard-wrapper ul li a:focus{
			outline: 0;
		}
		.form-wizard-wrapper ul li a span {
			position: relative;
			z-index: 1;
		}
		.form-wizard-wrapper ul li.active a {
			background-color: #ffffff;
		}
		.form-wizard-wrapper .form-wizard-content {
			background-color: #ffffff;
			padding: 20px;
			color: #777777;
			-webkit-transition: all 0.5s ease;
			-moz-transition: all 0.5s ease;
			transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;
			transform: translate3d(100%, 0px, 0px);
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
		}
		.form-wizard-wrapper .form-wizard-content.show {
			transform: translate3d(0px, 0px, 0px);
		}
		.form-wizard-wrapper .form-wizard-content h6 {
			font-size: 18px;
			font-weight: bold;
			margin: 0 0 10px;
		}
		.form-wizard-wrapper .form-wizard-content .form-wizard-next-btn,
		.form-wizard-wrapper .form-wizard-content .form-wizard-previous-btn {
			background-color: #3bb6b6;
			color: #ffffff;
			display: inline-block;
			padding: 6px 26px;
			border-radius: 4px;
			margin-top: 20px;
			text-decoration: none;
		}
		.form-wizard-wrapper .form-wizard-content .form-wizard-previous-btn {
			background-color: #f1f1f1;
			color: #000000;
		}

		.form-wizard-content-wrapper {
			height: 1500px;
			position: relative;
      background-color: #fff;
      padding: 50px;
		}
		.text-field {
			display: block;
			width: 100%;
			padding: .375rem .75rem;
			font-size: 1rem;
			line-height: 1.5;
			color: #495057;
			background-color: #fff;
			background-clip: padding-box;
			border: 1px solid #ced4da;
			border-radius: .25rem;
			transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
		}
    .txt{
      display: flex;
      align-items: center;
      text-align: left;
      line-height: 1.5;
      font-weight: normal;
      font-size: 20px;
    }
    .txt h4{
      padding:10px 0px;
    }
    .step1title{
      border-bottom: 3px solid salmon;
      padding: 10px 0;
    }
</style>
