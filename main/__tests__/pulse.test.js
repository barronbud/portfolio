import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";
// import ArticlesPage from "../app/articles/page";
// import ProjectsPage from "../app/projects/page";
// import ArticlePage from "../app/articles/[slug]/page";
// import ProjectPage from "../app/projects/[slug]/page";

describe("Page", () => {
    it("renders", async () => {
        const renderedPage = await Page();
        render(renderedPage);

        const heading = screen.getByTestId("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("Jeffrey Barron");
    });
});

// describe("ArticlesPage", () => {
//     it("renders", async () => {
//         const renderedPage = await ArticlesPage();
//         render(renderedPage);

//         const heading = screen.getByTestId("heading");
//         expect(heading).toBeInTheDocument();
//         expect(heading).toHaveTextContent("Articles");
//     });
// });

// describe("ProjectsPage", () => {
//     it("renders", async () => {
//         const renderedPage = await ProjectsPage();
//         render(renderedPage);

//         const heading = screen.getByTestId("heading");
//         expect(heading).toBeInTheDocument();
//         expect(heading).toHaveTextContent("Projects");
//     });
// });

// describe("ArticlePage", () => {
//     it("renders", async () => {
//         const renderedPage = await ArticlePage({
//             params: { slug: "splitting-teams-gone-wrong" },
//         });
//         render(renderedPage);

//         expect(
//             screen.getByText(
//                 "When Splitting Teams into Backend and Front-end Goes Wrong"
//             )
//         ).toBeInTheDocument();
//     });
// });

// describe("ProjectPage", () => {
//     it("renders", async () => {
//         const renderedPage = await ProjectPage({
//             params: { slug: "content-build-system-with-python-and-docker" },
//         });
//         render(renderedPage);

//         expect(
//             screen.getByText(
//                 "Creating a Content Build System with Python and Docker"
//             )
//         ).toBeInTheDocument();
//     });
// });
