export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    lead: Lead;
    communication: Communication;
    inventory: Inventory;
    application(applicationId: any): Application;
}
import { Lead } from "./PlatformModels";
import { Communication } from "./PlatformModels";
import { Inventory } from "./PlatformModels";
import Application = require("./PlatformApplicationClient");
