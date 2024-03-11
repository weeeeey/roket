export interface IContent {
    title: string;
    main: string;
    subDescription: string[];
    img?: string;
    bg?: string;
}

export const contens: IContent[] = [
    {
        title: 'THE STUDIO',
        main: 'Loket Design was founded by Bart Ruijpers in 2019. Fifteen years of consultancy and in-house experience, and numerous award-winning designs realized, led to this and we are excited to work on any project that comes our way.',
        subDescription: [
            `A frequent judge for international design competitions like the Clio Awards, the European Design Awards and the TISDC Taiwan, Bart previously was the Director of Industrial Design at Karim Rashid${`'`}s studio in New York, and Vice President of Design at eos.`,
            'Working with a network of exceptionally talented creative people, from graphic designers, web developers and prototypers, to copy-writers, production engineers and supply chain specialists, we make sure we assemble the right team to get your idea designed and made.',
        ],
        img: '1.webp',
        bg: 'rgb(239, 68, 68)',
    },
    {
        title: 'INDUSTRIAL DESIGN',
        main: "With over a decade of experience in industrial design, we know what it takes to make a product reality. Our greatest design goal is to create elegant solutions for life's little complexities while anticipating the big hurdles brands must overcome.",
        subDescription: [
            "From function, ergonomics, materials, production processes, sustainability, and pricing, we're very well-versed in all aspects of the product development process.",
            "Finally, we believe that good design is always the result of collaboration and a shared vision. It's our job to take your passion seriously—then we find a way to make it happen practically.",
        ],
        img: '2.svg',
    },
    {
        title: 'PACKAGING ',
        main: 'Every product has a story, and we help you tell that story by creating a holistic image of brand and product through structure and graphics.',
        subDescription: [
            'Custom designed when possible, or sourced stock packaging when that is the right canvas.',
        ],
        img: '3.svg',
        // bg: 'bg-yellow-500',
    },
    {
        title: 'VISUALIZATION',
        main: 'When speed to market is of the essence, rendering can be an alternative to photography.',
        subDescription: [
            'For investor decks, e-commerce environments, or packaging and display applications, we can quickly render consistently beautiful product imagery.',
        ],
    },
];
