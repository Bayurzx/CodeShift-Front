Checkout the Backend:
<https://github.com/Bayurzx/CodeShift-Back>

[OSI-approved License](./LICENSE)

## Solution Pattern: The Frontend


![AutoDocs Architectual Diagram](./AutoDocs%20AI%20(1).png)

To deploy the AutoDocs AI frontend, we'll utilize Knative Serving and deploy a Docker image containing our Next.js application. Follow these steps to set up the frontend:

1. **Clone the Next.js App from GitHub:**
   Clone the Next.js application code from the GitHub repository to your local machine.

2. **Set Up GitHub OAuth App:**
   - Create a GitHub OAuth App in your GitHub account settings.
   - Obtain the following information:
     - `GITHUB_CLIENT_ID`
     - `GITHUB_CLIENT_SECRET`

3. **Configure NextAuth for Authentication:**
   - Set up authentication for the Next.js app using NextAuth.
   - Add the following configurations:
     - `NEXTAUTH_SECRET` (a random JWT secret)
     - `NEXTAUTH_URL` (e.g., http://localhost:3000)

4. **Configure AstraDB Integration:**
   - Add the AstraDB configurations to enable data storage and retrieval in the frontend.
     - `ASTRA_DB_ID`
     - `ASTRA_DB_REGION`
     - `ASTRA_DB_APPLICATION_TOKEN`

5. **Build and Package the Docker Image:**
   - Build a Docker image containing the Next.js app and its dependencies.
   - Tag the image appropriately for deployment.

6. **Push Docker Image to a Container Registry:**
   - Push the Docker image to a container registry of your choice (e.g., Docker Hub, Google Container Registry).

7. **Deploy the Next.js App to Knative Serving:**
   - Use Knative Serving to deploy the Next.js app. Specify the image and configuration details.
     ```bash
     kn service create autodocs-frontend --image=<your-docker-image>
     ```

8. **Expose the Frontend Service:**
   - Expose the Knative service to make it accessible externally.
     ```bash
     kn service expose autodocs-frontend
     ```

9. **Access the Frontend:**
   - After successful deployment and exposure, access the frontend application using the provided URL.

By following these steps, you'll have a fully functional AutoDocs AI frontend deployed on Knative Serving, leveraging the power of Next.js for a dynamic and responsive user interface. The integration with GitHub OAuth and AstraDB ensures secure authentication and efficient data management within the application.