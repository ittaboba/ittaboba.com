export enum ArticleStatus {
    New = "New",
    Saved = "Saved",
    Published = "Published"
}

export enum ArticleType {
    Story = "Story",
    Project = "Project"
}

export type ArticleItem = {
    _id: string
    title: string
    image: string
}

export type ArticleState = {
    _id: string,
    title: string,
    image: string,
    type: ArticleType,
    content: string | null,
    status: ArticleStatus,
    lastEdit: Date | null,
    publicationDate: Date | null
}