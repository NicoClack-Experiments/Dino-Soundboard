# SSG Devcontainer — Sandboxed Environment

This devcontainer provides a **locked-down Node.js environment** for safely using AI agents while developing static site generators (SSGs).

## Sandbox Layers

| Layer                   | Mechanism                               | What it blocks                                                                                        |
| ----------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Read-only rootfs**    | `--read-only` flag                      | Prevents any writes to the container OS — no installing packages, no modifying system binaries        |
| **Seccomp profile**     | Custom `seccomp-sandbox.json`           | Blocks dangerous syscalls: `ptrace`, `bpf`, `mount`, `init_module`, `reboot`, `setns`, `keyctl`, etc. |
| **Capability drop**     | `--cap-drop ALL` then `--cap-add NET_*` | No `SYS_ADMIN`, `SYS_PTRACE`, `SYS_MODULE`, `DAC_OVERRIDE`, etc. Only network capabilities retained   |
| **No new privileges**   | `no-new-privileges:true`                | Blocks `suid`/`sgid` escalation — even if a binary tries, it can't gain extra privileges              |
| **Non-root user**       | `remoteUser: node`                      | Runs as `node` (UID 1000) — no `root` access inside the container                                     |
| **Resource limits**     | `--memory 4g --cpus 2`                  | Prevents fork bombs or memory exhaustion                                                              |
| **npm script blocking** | `ignore-scripts=true` by default        | No package install scripts run during `npm install` unless you explicitly opt in                      |

## Usage

1. **Open the project in VS Code**
2. **Reopen in Container** when prompted (or `Cmd+Shift+P` → "Dev Containers: Reopen in Container")
3. Inside the container, you can safely use AI agents knowing they have no escape vector

## Working with npm

By default, npm scripts are **disabled**:

```bash
# Install packages without running scripts (safe default)
npm install

# Temporarily allow scripts (only if you trust the packages)
npm config set ignore-scripts false
npm install
npm config set ignore-scripts true   # re-lock
```

## Notes

- The container rootfs is **read-only**. System state resets every restart.
- `/workspace/` is a bind mount to your host — code changes persist.
- `node_modules` lives on a named volume (persistent across restarts, isolated per project).
- The custom seccomp profile is in `.devcontainer/seccomp-sandbox.json`.
