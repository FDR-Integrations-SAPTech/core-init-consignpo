sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheSettleConsignmentPOList.iSeeThisPage();
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Material Document");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Material Doc. Year");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Status for RKWA entry");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Document Date");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Posting Date");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Quantity withdrawn for settlement");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Unit of measure for settlement");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Amount");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Currency");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Material");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Plant");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Supplier");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Special Stock");
            Then.onTheSettleConsignmentPOList.onFilterBar().iCheckFilterField("Company Code");
            Then.onTheSettleConsignmentPOList.onTable().iCheckColumns(14, {"MaterialDocument":{"header":"Material Document"},"MaterialDocumentYear":{"header":"Material Doc. Year"},"SuplrCsgnmtPplineWthdrwlStatus":{"header":"Status for RKWA entry"},"DocumentDate":{"header":"Document Date"},"PostingDate":{"header":"Posting Date"},"SuplrCsgnmtPplineWthdrwlQty":{"header":"Quantity withdrawn for settlement"},"SupCsgnmtPplineWthdrwlQtyUnit":{"header":"Unit of measure for settlement"},"SuplrCsgnmtPplineWthdrwlAmount":{"header":"Amount"},"DocumentCurrency":{"header":"Currency"},"Material":{"header":"Material"},"Plant":{"header":"Plant"},"ConsignmentPipelineSupplier":{"header":"Supplier"},"IssgOrRcvgStkIdfgSpclStkType":{"header":"Special Stock"},"CompanyCode":{"header":"Company Code"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheSettleConsignmentPOList.onFilterBar().iExecuteSearch();
            
            Then.onTheSettleConsignmentPOList.onTable().iCheckRows();

            When.onTheSettleConsignmentPOList.onTable().iPressRow(0);
            Then.onTheSettleConsignmentPOObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});