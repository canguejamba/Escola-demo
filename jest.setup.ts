import "@testing-library/jest-dom/extend-expect";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} {...props} />;
  }
}));
