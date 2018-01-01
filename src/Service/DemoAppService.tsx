//import { MarshallService } from "../../node_modules/marshalling/dist/marshalling";
import * as Marshalling from "marshalling";
// import { DemoAppController } from "../Controls/DemoAppController";

export class DemoAppService{
    static init() {
        Marshalling.Marshalling.MarshallService.getInstance().add("GetService", "MockTestResult.txt");
        Marshalling.Marshalling.MarshallService.getInstance().add("PostService", "PostMockTestResult");
    }
}
