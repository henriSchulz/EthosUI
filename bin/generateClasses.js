import * as fs from "node:fs";


function sideMenu() {
    // child i, --sm-count: i; i > 0
    const TEMPLATE = `
.side-menu:has(.side-menu-item:nth-child(__I__)) {
    --sm-count: __I__;
}`
// child i, --sm-active: i-1; i > 0
    const TEMPLATE_2 = `
.side-menu:has(.side-menu-item.active:nth-child(__I__)) {
    --sm-active: __I2__;
}`

    const out = "../lib/components/SideMenu/generated-side-menu-classes.css"



    const NUMBER_OF_CLASSES = 100

    let css = ""

    for (let i = 1; i <= NUMBER_OF_CLASSES; i++) {
        css += TEMPLATE.replace(/__I__/g, i) + "\n"
        css += TEMPLATE_2.replace(/__I__/g, i).replace(/__I2__/g, i-1) + "\n"

    }

    fs.writeFileSync(out, css)

    console.log("Generated", out)
}

function tabs() {
    const TEMPLATE = `
.tabs:has(.tab:nth-child(__I__)) {
    --count: __I__;
}`
// child i, --sm-active: i-1; i > 0
    const TEMPLATE_2 = `
.tabs:has(.tab.active:nth-child(__I__)) {
    --active: __I2__;
}`

    const out = "../lib/components/Tabs/generated-tab-classes.css"



    const NUMBER_OF_CLASSES = 100

    let css = ""

    for (let i = 1; i <= NUMBER_OF_CLASSES; i++) {
        css += TEMPLATE.replace(/__I__/g, i) + "\n"
        css += TEMPLATE_2.replace(/__I__/g, i).replace(/__I2__/g, i-1) + "\n"

    }

    fs.writeFileSync(out, css)

    console.log("Generated", out)
}


sideMenu()
tabs()