import app from '../lib/app';

// Default state object
export default {
    sliders: [
        { left: "Agitated", right: "Calm", value: 0.0 },
        { left: "Happy", right: "Sad", value: 0.0 },
        { left: "Tired", right: "Wide Awake", value: 0.0 },
        { left: "Scared", right: "Fearless", value: 0.0 },
    ],
    videos: {},
    recommendations: [
        { title: "No content", genre: "No content", img: "" },
        { title: "No content", genre: "No content", img: "" },
        { title: "No content", genre: "No content", img: "" },
        { title: "No content", genre: "No content", img: "" },
        { title: "No content", genre: "No content", img: "" },
    ]
};
