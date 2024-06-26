import { ContentElementType, ImageModifier } from "./types";

interface ContentElement {
    type: ContentElementType;
}

export interface ParagraphElement extends ContentElement {
    type: ContentElementType.PARAGRAPH;
    text: string;
}

export interface SectionTitleElement extends ContentElement {
    type: ContentElementType.SECTION_TITLE;
    title: string;
}

export interface ImageElement extends ContentElement {
    type: ContentElementType.IMAGE;
    modifier: ImageModifier | null;
    asset: string;
    caption: string;
    alttext: string;
}

export interface EquationElement extends ContentElement {
    type: ContentElementType.EQUATION;
    tex: string;
    alttext: string;
}

export interface InteractiveElement extends ContentElement {
    type: ContentElementType.INTERACTIVE;
    asset: string;
    caption: string;
    alttext: string;
}

export interface InteractiveComponentElement extends ContentElement {
    type: ContentElementType.INTERACTIVE_COMPONENT;
    asset: string;
    component: string;
    caption: string;
    alttext: string;
}

// Union type of all content elements
export type LessonContentElement = 
    | ParagraphElement
    | SectionTitleElement
    | ImageElement
    | EquationElement
    | InteractiveElement
    | InteractiveComponentElement;

export interface OutlineElement {
    sectiontitle: string;
    pagenumber: number;
}

export interface LessonContent {
    outlineElements: OutlineElement[];
    pageContents: LessonContentElement[][];
}
