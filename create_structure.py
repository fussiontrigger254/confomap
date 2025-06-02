import os

# Define the folder and file structure
structure = {
    "src": {
        "components": [
            "Sidebar.tsx",
            "DashboardHeader.tsx",
            "MetricsSection.tsx",
            "StatusSection.tsx",
            "RecentlyReviewedDocuments.tsx",
            "RecentlyJoinedStaff.tsx"
        ],
        "components/__tests__": [
            "Sidebar.test.tsx",
            "DashboardHeader.test.tsx",
            "MetricsSection.test.tsx",
            "StatusSection.test.tsx",
            "RecentlyReviewedDocuments.test.tsx",
            "RecentlyJoinedStaff.test.tsx"
        ],
        "pages": [
            "Login.tsx",
            "Dashboard.tsx"
        ],
        "App.tsx": None,
        "main.tsx": None,
        "index.css": None,
        "types.ts": None,
        "utils/auth.ts": None
    },
    "public": [
        "vite.svg"
    ],
    "tests": [
        "setup.ts"
    ],
    ".env": None,
    ".gitignore": None,
    "package.json": None,
    "pnpm-lock.yaml": None,
    "vite.config.ts": None,
    "tsconfig.json": None,
    "tsconfig.node.json": None,
    "jest.config.js": None,
    "tailwind.config.js": None,
    "postcss.config.js": None
}

def create_structure(base_path, structure):
    for key, value in structure.items():
        path = os.path.join(base_path, key)
        if isinstance(value, list):
            os.makedirs(path, exist_ok=True)
            for file in value:
                file_path = os.path.join(path, file)
                os.makedirs(os.path.dirname(file_path), exist_ok=True)
                open(file_path, "a").close()
        elif isinstance(value, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, value)
        elif value is None:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            open(path, "a").close()

# Run the script
if __name__ == "__main__":
    create_structure(".", structure)
    print("✅ Project structure created successfully.")
