import React from 'react';

const Project1 = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Project 1: Diabetes Classification</h1>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Description</h2>
        <p className="text-gray-700">
          Diabetes is a prevalent chronic condition characterized by impaired glucose regulation. This project aimed to analyze health indicators to identify the key predictors of diabetes and improve early detection and prevention strategies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Objective</h2>
        <p className="text-gray-700">
          To identify and model significant risk factors for diabetes using data analysis techniques, ultimately developing a simplified yet effective predictive model.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Dataset</h2>
        <p className="text-gray-700">
          The project utilized the Diabetes Health Indicators Dataset from the Behavioral Risk Factor Surveillance System (BRFSS), comprising 70,692 survey responses with 21 independent variables.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Methodology</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Data Cleaning:</strong> Removed subjective variables to focus on more objective indicators.</li>
          <li><strong>Regression Analysis:</strong> Performed linear and logistic regression to establish baseline accuracy. Logistic regression achieved 73.38% accuracy in predicting diabetes.</li>
          <li><strong>Decision Tree Analysis:</strong> Built decision tree models using Python (sklearn) and Weka. Identified key predictors such as cholesterol checks, high blood pressure, and BMI. Accuracy ranged from 71.52% to 72.52%.</li>
          <li><strong>Association Rules:</strong> Applied association rules to find significant relationships between diabetes and variables like healthcare access and age.</li>
          <li><strong>Cluster Analysis:</strong> Used K-means clustering to group variables and identify top predictors, achieving 68.31% accuracy.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Key Findings</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Top Predictors: High blood pressure, cholesterol check, vegetable consumption, and high cholesterol were consistently identified as significant predictors of diabetes.</li>
          <li>Simplified Model: A 4-variable model maintained near-equal accuracy (69.12%) with reduced complexity, making it more practical for implementation.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Impact</h2>
        <p className="text-gray-700">
          The findings emphasize the importance of regular screenings for cholesterol and blood pressure and maintaining a healthy diet. The project demonstrates how data analysis can provide actionable insights for improving public health.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Technologies Used</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Tools:</strong> Python (sklearn, statsmodel), Weka, Excel</li>
          <li><strong>Techniques:</strong> Regression, Decision Trees, Association Rules, Cluster Analysis</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Outcome</h2>
        <p className="text-gray-700">
          The project successfully identified critical health indicators for diabetes, offering a streamlined model for practical use in preventive healthcare and educational initiatives.
        </p>
      </section>
    </div>
  );
};

export default Project1;
