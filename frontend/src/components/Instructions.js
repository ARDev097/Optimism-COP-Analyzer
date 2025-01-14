import React from "react";
import "../styles/Instructions.css";
import optimismEmoji from "../assets/OP.jpeg"; // Adjust the path according to where you save the image

const Instructions = ({
  showInstructions,
  handleClose,
  email,
  handleEmailChange,
  handleContinue,
  emailError,
}) => {
  if (!showInstructions) return null;
  const parameterDescriptions = [
    {
      icon: "🏛️",
      title: "Decision Making Authority",
      description:
        "This parameter measures the extent to which a HCC has the power to make binding decisions that affect the governance or operations of Optimism.",
    },
    {
      icon: "🌐",
      title: "Scope of Influence",
      description:
        "This parameter assesses the breadth of the HCC impact within the Optimism ecosystem, including the range of areas or activities they influence.",
    },
    {
      icon: "🤝",
      title: "Community Engagement",
      description:
        "This parameter evaluates how actively the HCC interacts with the community, including gathering feedback, holding public meetings, and providing updates.",
    },
    {
      icon: "🔄",
      title: "Operational Independence",
      description:
        "This parameter measures the degree of autonomy the HCC has in its operations, including budget control, decision-making processes, and procedural oversight.",
    },
    {
      icon: "🗳️",
      title: "Voting Power",
      description:
        "This parameter assesses the extent of voting authority held by the HCC members, including the ability to approve or reject proposals.",
    },
    {
      icon: "🚫",
      title: "Veto Power",
      description:
        "This parameter evaluates whether the HCC has the authority to veto or reject decisions made by other governance bodies.",
    },
  ];

  const steps = [
    {
      title: "Enter Your Email:",
      icon: "📧",
      description:
        "Please provide your email address to proceed. This will allow us to save your configurations and results.",
    },
    {
      title: "Set Weights for Parameters:",
      icon: "⚖️",
      description:
        "Adjust the weightage for each of the six parameters. The total weight must add up to 100%. As you modify the weights, the background color of the fields will change, highlighting the fields that have been altered. This feature helps you easily identify the changes you've made.",
    },
    {
      title: "Assign Scores:",
      icon: "⭐",
      description:
        "For each HCC, assign a score (0-5) for each parameter based on your assessment. The scores reflect the influence or power each HCC holds in various aspects. When you change a score, the field's background color will update, indicating that the field has been modified. This visual cue helps you keep track of the changes you've made.",
      sublist: [
        {
          title: "Score Interpretation:",
          items: [
            {
              title: "0:",
              icon: "🚫",
              description:
                "Indicates no influence or power in the given parameter.",
            },
            {
              title: "5:",
              icon: "💪",
              description:
                "Indicates maximum influence or power in the given parameter.",
            },
          ],
        },
      ],
    },
    {
      title: "View Influence Analysis:",
      icon: "📊",
      description:
        "Based on the weights and scores you set, the influence of each HCC will be calculated. You can view this information in the 'HCC Influence Analysis' section on the right side of the screen. This section displays 'Influence Based on Initial Values,' 'Influence Based on Your Adjustments,' and a comparison of the changed values.",
    },
    {
      title: "Save Your Data:",
      icon: "💾",
      description:
        "Once you have finalized the weights and scores, click the 'Save Data' button in the 'HCC Influence Analysis' section to save your data. This ensures your adjustments are recorded and can be referenced.",
    },
  ];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 divouter">
      <div className="p-8 rounded-lg  w-full max-w-lg outerdiv">
        <div className="whole-intruction-div">

        <div className="instructiondiv">
          <h2 className="text-xl font-semibold">Instructions 📋</h2>
        </div>
        <div className="p-6">
          <p className="mb-4">
            Welcome to the HCC Influence Analyzer! 🌟 We would like to collect
            this data to calculate the influence of different Houses, Councils,
            and Committees (HCC) in the Optimism ecosystem.{" "}
            <img
              src={optimismEmoji}
              alt="Optimism"
              style={{
                width: "1.5em",
                height: "1.5em",
                verticalAlign: "middle",
              }}
            />
          </p>
          <p className="mb-4 text-red-500 font-semibold">
            <strong>
              For optimal functionality, we recommend using this application on
              a laptop or desktop computer. 💻
            </strong>
          </p>

          <div style={{ marginBottom: "16px" }}>
            <h5 className="text-lg font-semibold mb-2">
              Parameters Descriptions:
            </h5>
          </div>
          <ul className="list-disc pl-5 mb-4">
            {parameterDescriptions.map(({ icon, title, description }) => (
              <li key={title} className="mb-2">
                <strong>
                  {icon} {title}:
                </strong>
                <br />
                <span style={{ marginLeft: "20px" }}>{description}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginBottom: "16px" }}>
            <h5 className="text-lg font-semibold mb-2">
              Getting Started with the HCC Influence Calculator:
            </h5>
          </div>
          <ol className="list-decimal pl-5 mb-4">
            {steps.map(({ title, icon, description, sublist }, index) => (
              <li key={index} className="mb-2">
                {icon}{" "}<strong>{title}</strong> 
                <span style={{ marginLeft: "10px" }}>{description}</span>
                {sublist && (
                  <ul className="list-disc pl-5 mb-4 mt-2">
                    {sublist.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <strong>{sub.title}</strong>
                        <ul className="list-disc pl-5 mt-2">
                          {sub.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <strong>{item.title}</strong> {item.icon}
                              <span style={{ marginLeft: "10px" }}>
                                {item.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          <div style={{ marginBottom: "16px" }}>
              <h5 className="text-lg font-semibold mb-2">
                Guide to Using the HCC Influence Analyzer:
              </h5>
              <p>
                For a detailed walkthrough on how to use this tool effectively, please refer to our comprehensive guide:
                <a 
                  href="https://coffee-cheap-marten-178.mypinata.cloud/ipfs/Qmc3LisjwfGhTrbEZBYBdCmqKd8RRLwXxkWk3T3fkN4zsg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 ml-2"
                >
                  HCC Influence Analyzer Guide
                </a>
              </p>
            </div>

          <div style={{ marginBottom: "16px" }}>
            <h5 className="text-lg font-semibold mb-2">Enter your Email:</h5>
          </div>
          <div className="mb-4 inpputdiv">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`w-full p-2 border rounded ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {emailError && (
              <p className="text-red-500 mt-2 emailerror">{emailError}</p>
            )}
          </div>
        </div>
        <div className="flex justify-end p-4 border-t submitbtn">
          <button
            onClick={handleContinue}
            className="continuebutton"
          >
            Continue 
          </button>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Instructions;