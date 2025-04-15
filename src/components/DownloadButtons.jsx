import React from "react";

export const DownloadButtons = ({ methods }) => {
    return (
        <div className="d-flex gap-2 flex-wrap">
            {methods.map(({ name, icon, color, link }, index) => (
                <a 
                    key={index} 
                    href={link} 
                    className={`btn ${color} btn-sm`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    translate="no"
                >
                    <i className={icon}></i> {name}
                </a>
            ))}
        </div>
    );
};

