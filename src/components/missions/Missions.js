import "./missions.css";

const Missions = () => {
  return (
    <div className="missions-list-table" data-testid="missions">
      <div className="table-header">
        <div className="th th-1">Mission</div>
        <div className="th th-2">Description</div>
        <div className="th th-3">Status</div>
        <div className="th th-4" />
      </div>
      <div className="table-body"></div>
    </div>
  );
};

export default Missions;
