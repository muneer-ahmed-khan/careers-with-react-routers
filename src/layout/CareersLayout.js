import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <Outlet />
    </div>
  );
}
