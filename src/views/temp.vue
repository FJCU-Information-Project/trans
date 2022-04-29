<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "AddDataSet",
  components: {
    Navbar,
  },
  data() {
    return {
      input: "",
      form: {
        name: "",
        unit: "",
        period_start: "",
        period_end: "",
        note: "",
        is_public: "",
      },
      upload: null,
      uploadTables:[
        {
          name: "attribute",
          label: "肇事因素屬性表"
        },
        {
          name: "node",
          label: "肇事因素表"
        },
        {
          name: "resultAttribute",
          label: "肇事結果屬性表"
        },
        {
          name: "result",
          label: "肇事結果表"
        },
        {
          name: "case",
          label: "車禍案件總表"
        },
      ]
    };
  },
  methods: {
    handleSubmit() {
      console.log("submit!");
      const formData = new FormData();
      const userToken = localStorage.getItem("token");
      formData.append("token", userToken); // Form token
      formData.append("dataset", 1); // Form token
      const form = this.form;
      // ["datasetName", "datasetUnit", "datasetPeriodStart", "datasetPeriodEnd", "datasetNote", "datasetPublic"]
      formData.append("userToken", userToken); // Form userToken
      formData.append("datasetName", form.name); // Form userToken
      formData.append("datasetUnit", form.unit); // Form userToken
      formData.append("datasetPeriodStart", form.period_start); // Form userToken
      formData.append("datasetPeriodEnd", form.period_end); // Form userToken
      formData.append("datasetNote", form.note); // Form userToken
      formData.append("datasetPublic", form.is_public); // Form userToken
      const api = "http://140.136.155.121:50000";
      this.$http
        .post(api + "/addDataset", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(JSON.stringify(response.data));
        });
    },
    submitUpload() {
      console.log("submitUpload");
      // TODO: 改檔案ID
      /* console.log(this.$refs.Upload);
      this.uploadTables.forEach(element => {
        let file = document.getElementById("uploadTable_"+element.name);//.files[0];
        console.log(file);
      });
      const formData = new FormData();
      const userToken = localStorage.getItem("token");
      formData.append("token", userToken); // Form token
      formData.append("dataset", userToken); // Form token
      // TODO: 改檔案名稱
      formData.append("attributeFileName", uploadFile);
      formData.append("nodeFileName", uploadFile2);
      formData.append("resultAttributeFileName", uploadFile3);
      formData.append("resultFileName", uploadFile4);
      formData.append("caseFileName", uploadFile5);
      // Form file name
      const api = "http://140.136.155.121:50000";
      this.$http
        .post(api + "/uploadDatasets", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(JSON.stringify(response.data));
        }); */
      console.log(this.$refs.attribute.files);
    },
    handleExceed() {
      console.log("handleExceed");
    },
  },
  mounted() {
    this.upload = this.$refs.Upload;
  },
};
</script>