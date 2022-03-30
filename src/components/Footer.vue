<template>
  <MDBFooter bg="primary" :text="['center', 'white', 'lg-start']">
    <!-- Grid container -->
    <MDBContainer class="p-4">
      <!--Grid row-->
      <MDBRow>
        <!--Grid column-->
        <MDBCol lg="6" md="12" class="mb-4 mb-md-0">
          <h5 class="text-uppercase">Footer Content</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Iste atque ea quis molestias. Fugiat pariatur maxime quis
            culpa corporis vitae repudiandae aliquam voluptatem veniam,
            est atque cumque eum delectus sint!
          </p>
        </MDBCol>
        <!--Grid column-->

        <!--Grid column-->
        <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </MDBCol>
        <!--Grid column-->

        <!--Grid column-->
        <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Links</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </MDBCol>
        <!--Grid column-->
      </MDBRow>
      <!--Grid row-->
    </MDBContainer>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>
<script>
  //import 'mdb-vue-ui-kit/css/mdb.min.css';
  import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBRow,
      MDBCol
    },
  };
</script>