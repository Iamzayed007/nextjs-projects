import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        console.log("kjsbgsk");
        await dbConn();
        console.log("connect");

        await Contact.create(body);
        console.log("Create");
        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        // return NextResponse.json(
        //     { message: "Server error, please try again!" },
        //     { status: 500 }
        // )
        console.log(e)
    }
}