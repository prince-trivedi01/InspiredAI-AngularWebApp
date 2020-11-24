export class Blog {
    constructor(
        public imagePath: string,
        public title: string,
        public views: number,
        public likes: number,
        public comments: number,
        public id?: string,
        public para?: string,
    ) { }
}