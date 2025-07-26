// src/components/BuggyComponent.tsx

function BuggyComponent() {
  // Simulate error on render
  throw new Error('💥 Simulated crash in BuggyComponent');
}

export default BuggyComponent;
