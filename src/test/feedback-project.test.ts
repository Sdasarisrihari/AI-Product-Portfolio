import { describe, expect, it } from "vitest";
import { feedbackProject } from "@/lib/feedback-project";

describe("Feedback-to-Product project details", () => {
  it("uses the provided live demo URL and links the uploaded project guide", () => {
    expect(feedbackProject.demoUrl).toBe("https://feedbacktoproduct.vercel.app/");
    expect(feedbackProject.projectDocumentation.content_type).toBe("application/pdf");
    expect(feedbackProject.projectDocumentation.original_filename).toBe("Feedback-to-Product-Project-Documentation.pdf");
  });
});