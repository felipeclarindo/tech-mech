🌍 [Leia em Português](README.pt-BR.md)

# Tech Mech

This is a web project of a fictitious automotive workshop seeking to improve the customer experience with your vehicle, improving the time spent and bringing a reduction in lost time. The site is an extension of Porto and was created using `Java` for the development of the api and for the Front-end was used`Next.js` and `TypeScript`. Integrated by `Virtual Assistant`(Created with IBM) capable of performing pre-diagnostics, pre-budges and schedules.

## Functionalities

- Login Pages and User Registration.
- Home page that presents the services of the workshop.
- "About Us" page that details the team and the history of the workshop.
- Virtual Assistant to assist with diagnostics and scheduling.
- Additional pages such as an attendee area and a custom error page.

## Technologies used

- `Next.js` - React Framework
- `TypeScript` - JS Superset
- `IBM Watson Assistant` - Virtual Assistant Integration
- `Tailwind` - Styling
- `FontAwesome` - Icons
- `Git` - Version control
- `Java`- Development of api
- `Maven` - Build automation and dependency management tool for the api.

## Requirements for installation

Make sure you have the `node`, `npm` and `Java Development Kit` installed in your machine for run the project.

## Steps for installation and run the API

1. Clone the repository:

```bash
git clone https://github.com/felipeclarindo/tech-mech-api.git
```

2. Enter the directory of api:

```bash
tech-mech-api
```

3. Configure your oracle database credentials in `src/main/java/resources/application.properties`.

4. Execute sql locate at `sql/table/clients.sql` in the database.

5. Run the file `Main.java`.

## Steps for installing and run the Front end.

1. Clone the repository:

```bash
git clone https://github.com/felipeclarindo/tech-mech.git
```

2. Enter the directory:

```bash
cd tech-mech
```

3. Now let's run the front-end (Make sure the api is running)

```bash
npm install
```

4. Run the project locally (make sure the java API is running as well):

```bash
npm run dev
```

5. Click on the link provided in the terminal, usually:

- `http://localhost:3000`

## Contribution

Contributions are welcome! If you have suggestions for improvements, feel free to open an issue or submit a pull request.

## Authors

- [Victor Augusto](https://github.com/victoraugustogfavaro)
- [Felipe Clarindo](https://github.com/felipeclarindo)
- [Jennie Suzuki](https://github.com/jenniesuzuki)

## License

This project is licensed under the [GNU Affero License](https://www.gnu.org/licenses/agpl-3.0.html).
