export class ReviewCard {
    constructor(
        public imagePath: string,
        public title: string,
        public para: string,
        public likes: number,
        public comments?: number,
        public date?: Date
    ) { }
}