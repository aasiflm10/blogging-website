export function PageNumberComponent() {
  return (
    <div className="flex flex-col space-x-4 md:flex-row md:justify-center">
      <button>Previous</button>
      <div className="flex space-x-4 justify-center">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
      </div>
      <button>Next</button>
    </div>
  );
}
