//import { Marshalling } from "../../node_modules/marshalling/dist/marshalling";
import * as Marshalling from "marshalling";
import { GetCommand } from "../Commands/GetCommand";
import { PostCommand } from "../Commands/PostCommand";

export class DemoAppController {
    private static customMarshalling = Marshalling.Marshalling.Marshall.getInstance();
    public static EVENT_CUSTOM: string = "eventCustom";
    public static ANOTHER_EVENT_CUSTOM: string = "anotherEventCustom";

    public static init() {
        this.customMarshalling.addMarshallingCommand(this.EVENT_CUSTOM, GetCommand);
        this.customMarshalling.addMarshallingCommand(this.ANOTHER_EVENT_CUSTOM, PostCommand);
    }
}