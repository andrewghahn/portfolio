// A small interactive React component — a good first thing to read if you're learning React.
//
// Key ideas:
// - A component is a function that returns what to show (JSX, which looks like HTML).
// - `useState` stores a value that can change. When it changes, React re-runs the
//   function and updates the page to match.
// - Astro pages are static HTML by default. To make this component interactive in the
//   browser, the page uses it with a `client:` directive, e.g. <ColorMixer client:visible />.
import { useState } from 'react';

type Channel = 'red' | 'green' | 'blue';

export default function ColorMixer() {
  // One piece of state holding all three color channels (0–255 each).
  const [color, setColor] = useState({ red: 31, green: 111, blue: 235 });

  const hex =
    '#' +
    [color.red, color.green, color.blue].map((n) => n.toString(16).padStart(2, '0')).join('');

  // Copy the old color and replace just the channel that changed.
  function update(channel: Channel, value: number) {
    setColor({ ...color, [channel]: value });
  }

  return (
    <div className="card" style={{ display: 'grid', gap: '1rem' }}>
      <div
        style={{
          background: hex,
          height: 120,
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)',
        }}
      />
      {(['red', 'green', 'blue'] as Channel[]).map((channel) => (
        <label key={channel} style={{ display: 'grid', gridTemplateColumns: '4rem 1fr 3rem', gap: '0.75rem', alignItems: 'center' }}>
          <span style={{ textTransform: 'capitalize' }}>{channel}</span>
          <input
            type="range"
            min={0}
            max={255}
            value={color[channel]}
            onChange={(e) => update(channel, Number(e.target.value))}
          />
          <code>{color[channel]}</code>
        </label>
      ))}
      <p style={{ margin: 0 }}>
        Hex: <code>{hex}</code>
      </p>
    </div>
  );
}
