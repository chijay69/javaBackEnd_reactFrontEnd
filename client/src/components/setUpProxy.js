import proxy from "http-proxy-middleware";


// eslint-disable-next-line import/no-anonymous-default-export
export default function (app) {
    app.use(proxy("/oauth/token", {target: "http://localhost:8080"})); // put your host and api
};