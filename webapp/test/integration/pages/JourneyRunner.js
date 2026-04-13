sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"rc/com/consignpo/test/integration/pages/SettleConsignmentPOList",
	"rc/com/consignpo/test/integration/pages/SettleConsignmentPOObjectPage"
], function (JourneyRunner, SettleConsignmentPOList, SettleConsignmentPOObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('rc/com/consignpo') + '/test/flp.html#app-preview',
        pages: {
			onTheSettleConsignmentPOList: SettleConsignmentPOList,
			onTheSettleConsignmentPOObjectPage: SettleConsignmentPOObjectPage
        },
        async: true
    });

    return runner;
});

