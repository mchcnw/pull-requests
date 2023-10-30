import axios from "axios";
import { useSearchPullRequests } from "./useSearchPullRequests";
import { renderHook, act, waitFor } from "@testing-library/react";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockData = {
  data: [
    { id: 1, title: "PR 1", comments_url: "https://github.com/comments/1" },
    { id: 2, title: "PR 2", comments_url: "https://github.com/comments/2" },
  ],
};

describe("usePullRequestsList", () => {
  it("should handle error", async () => {
    mockedAxios.get.mockRejectedValueOnce({ message: "API server down" });
    const { result } = renderHook(() => useSearchPullRequests());
    await act(async () => {
      await result.current.getPullRequests("test");
    });
    await waitFor(() => {
      expect(result.current.error).toBeTruthy();
    });
  });

  it("should return Pull Requests", async () => {
    mockedAxios.get.mockResolvedValueOnce(mockData);
    const { result } = renderHook(() => useSearchPullRequests());
    await act(async () => {
      await result.current.getPullRequests("test");
    });
    await waitFor(() => {
      expect(result.current.data.length).toEqual(2);
      expect(result.current.data[0].id).toEqual(1);
      expect(result.current.data[1].id).toEqual(2);
    });
  });

  it("should return Pull Requests Comments count", async () => {
    mockedAxios.get
      .mockResolvedValueOnce(mockData)
      .mockResolvedValueOnce({ data: ["comment 1", "comment 2"] });
    const { result } = renderHook(() => useSearchPullRequests());
    await act(async () => {
      await result.current.getPullRequests("test");
    });
    await waitFor(() => {
      expect(result.current.data.length).toEqual(2);
      expect(result.current.data[0].id).toEqual(1);
      expect(result.current.data[1].id).toEqual(2);
      expect(result.current.data[0].commentCount).toEqual(2);
    });
  });
});
