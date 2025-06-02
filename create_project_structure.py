import os

# Define the project structure as a dictionary (without the top-level confomap-dashboard folder)
project_structure = {
    "src": {
        "components": {
            "stats": {
                "UserStats.jsx": "",
                "UserStats.test.jsx": "",
                "DocumentStats.jsx": "",
                "DocumentStats.test.jsx": "",
                "DepartmentStats.jsx": "",
                "DepartmentStats.test.jsx": "",
                "ClauseStats.jsx": "",
                "ClauseStats.test.jsx": "",
                "EvidenceStats.jsx": "",
                "EvidenceStats.test.jsx": ""
            },
            "cards": {
                "ImplementationCard.jsx": "",
                "ImplementationCard.test.jsx": "",
                "EquipmentCard.jsx": "",
                "EquipmentCard.test.jsx": "",
                "IncidentCard.jsx": "",
                "IncidentCard.test.jsx": "",
                "AuditStatusCard.jsx": "",
                "AuditStatusCard.test.jsx": "",
                "CapaStatusCard.jsx": "",
                "CapaStatusCard.test.jsx": "",
                "ContractStatusCard.jsx": "",
                "ContractStatusCard.test.jsx": ""
            },
            "tables": {
                "RecentlyReviewedDocs.jsx": "",
                "RecentlyReviewedDocs.test.jsx": "",
                "RecentlyJoinedStaff.jsx": "",
                "RecentlyJoinedStaff.test.jsx": ""
            }
        },
        "App.jsx": "",
        "App.test.jsx": "",
        "main.jsx": "",
        "index.css": "",
        "declarations.d.ts": "",
        "vite-env.d.ts": ""
    },
    "public": {
        "vite.svg": ""
    },
    ".gitignore": "",
    "index.html": "",
    "package.json": "",
    "pnpm-lock.yaml": "",
    "postcss.config.js": "",
    "tailwind.config.js": "",
    "tsconfig.json": "",
    "tsconfig.node.json": "",
    "vite.config.ts": "",
    "README.md": ""
}

def create_structure(base_path, structure):
    """
    Recursively create directories and files, skipping if they already exist.
    
    Args:
        base_path (str): The current directory path
        structure (dict or str): The structure to create (dict for directories, str for files)
    """
    for name, content in structure.items():
        path = os.path.join(base_path, name)

        if isinstance(content, dict):
            # Create directory if it doesn't exist
            if not os.path.exists(path):
                os.makedirs(path)
                print(f"Created directory: {path}")
            else:
                print(f"Skipped directory (already exists): {path}")
            # Recursively create substructure
            create_structure(path, content)
        else:
            # Create file if it doesn't exist
            if not os.path.exists(path):
                with open(path, 'w') as f:
                    f.write(content)
                print(f"Created file: {path}")
            else:
                print(f"Skipped file (already exists): {path}")

def main():
    # Get the current working directory (this will be confomap-dashboard)
    base_dir = os.getcwd()
    print(f"Creating project structure in: {base_dir}")

    # Create the project structure directly in the current directory
    create_structure(base_dir, project_structure)

    print("\nProject structure creation completed.")
    print("Next steps:")
    print("1. Stay in the current directory: cd confomap-dashboard (if not already there)")
    print("2. Install dependencies: pnpm install")
    print("3. Install Tailwind CSS: pnpm add -D tailwindcss@latest postcss@latest autoprefixer@latest")
    print("4. Initialize Tailwind: npx tailwindcss init -p")
    print("5. Populate files with content (e.g., components, tests, configs).")

if __name__ == "__main__":
    main()