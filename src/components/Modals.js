import React, { Component } from "react";

const SettingsModal = () => {
  return (
    <div className="modal fade" id="settings-modal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title" id="exampleModalLabel">
              Settings
            </h1>
          </div>
          <div className="modal-body">
            <div>
              <div>Total Players </div>
              <div>Theme </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SettingsModal };
