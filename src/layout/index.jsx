import LayoutProvider from "./provider";

export default function Layout({ children }) {

    return (
        <LayoutProvider>
            <main>
                {children}
            </main>

            {/* <footer>
                footer...
            </footer> */}
        </LayoutProvider>
    )
}