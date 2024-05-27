export type {ButtonProps, Variant} from "./components/Button/Button";
export type {HeadlineProps} from "./components/Headline/Headline";
export type {TextProps} from "./components/Text/Text";
export type {InputProps} from "./components/Input/Input";
export type {SheetProps} from "./components/Sheet/Sheet";
export type {CardProps} from "./components/Card/Card";
export type {ModalProps} from "./components/Modal/Modal";
export type {NavbarProps} from "./components/Navbar/Navbar";
export type {MenuProps} from "./components/Menu/Menu";
export type {MenuItemProps} from "./components/Menu/Menu";
export type {SelectProps} from "./components/Select/Select";
export type {ImageCardProps} from "./components/ImageCard/ImageCard";
export type {SkeletonProps} from "./components/Skeleton/Skeleton";
export type {FileInputProps} from "./components/Input/FileInput.tsx";
export type {ToastContainerProps} from "./components/toast/ToastContainer";
export type {ToastProperties} from "./components/toast/toast.ts";
export type {TabsProps} from "./components/Tabs/Tabs";
export type {TooltipProps} from "./components/Tooltip/Tooltip";
export type {ColorCircleProps} from "./components/ColorCircle/ColorCircle";
export type {CodeboxProps} from "./components/Codebox/Codebox";
export type {SideMenuProps} from "./components/SideMenu/SideMenu";
export type {SidebarProps} from "./components/Sidebar/Sidebar.tsx";

export {Button} from "./components/Button/Button"
export {Headline} from "./components/Headline/Headline"
export {Text} from "./components/Text/Text"
export {Input} from "./components/Input/Input"
export {Sheet} from "./components/Sheet/Sheet"
export {Card} from "./components/Card/Card"
export {Modal} from "./components/Modal/Modal"
export {Navbar} from "./components/Navbar/Navbar"
export {Menu} from "./components/Menu/Menu"
export {MenuItem} from "./components/Menu/Menu"
export {Select} from "./components/Select/Select"
export {ImageCard, ImageCardSkeleton} from "./components/ImageCard/ImageCard"
export {Skeleton} from "./components/Skeleton/Skeleton"
export {FileInput} from "./components/Input/FileInput.tsx"
export {ToastContainer} from "./components/toast/ToastContainer"
export {Tabs} from "./components/Tabs/Tabs"
export {Tooltip} from "./components/Tooltip/Tooltip"
export {ColorCircle} from "./components/ColorCircle/ColorCircle"
export {Codebox} from "./components/Codebox/Codebox"
export {SideMenu} from "./components/SideMenu/SideMenu"
export {Sidebar} from "./components/Sidebar/Sidebar.tsx"

import "./index.css"

export {toast} from "./components/toast/toast.ts"

const BASE = 20000

export const Z_INDEX = {
    TOOLTIP: BASE + 4,
    SIDEBAR: BASE,
    SHEET: BASE + 3,
    MODAL: BASE + 3,
    MODAL_BG: BASE + 2,
    NAVBAR: BASE + 1,
    MENU: BASE + 4,
}




