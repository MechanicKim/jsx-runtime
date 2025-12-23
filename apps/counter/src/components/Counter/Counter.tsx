export default function Counter() {
  let count = 0;

  const handleClick = (e: MouseEvent) => {
    const btn = e.target as HTMLButtonElement;
    count++;
    btn.innerText = `클릭 횟수: ${count}`;
  };

  return (
    <>
      <h1>Vite + TS + JSX (No React)</h1>
      <p>이 화면은 React 없이 오직 JSX와 바닐라 DOM API로만 렌더링되었습니다.</p>
      <button style="padding: 10px 20px; cursor: pointer;" onClick={handleClick}>
        클릭 횟수: {count}
      </button>
    </>
  );
}
