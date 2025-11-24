// 

import { test } from "../../../src/fixtures/envConf";

test("Get env config", async({ envConf }) => {
    let timeoutDefault = envConf.getValueFromKey("TIMEOUT_DEFAULT")
    console.log(timeoutDefault);
})