import {notFound} from "next/navigation";

import index from './index';

import React from "react";

export default function NotFound() {
    return notFound()
}
let myFunction: any;
({myFunction} = index);
myFunction();