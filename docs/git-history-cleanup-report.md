# Git History Cleanup Report — Large Blob Removal

**Date:** 2026-02-17  
**Tool:** git filter-branch (index-filter)  
**Branch:** ver/V100.0.01.06  
**Tags:** ver/V100.0.01.08 (rewritten), ver/V100.0.01.02–06 (rewritten)

---

## Summary

Removed large historical blobs (videos, zip archives) from **all commits** in the repository. History was rewritten and force-pushed to origin. Repository size reduced by ~96%.

---

## 1. Files Removed from History

| Pattern | Examples Removed |
|---------|------------------|
| `*.mp4` | `public/landing/videos/producer-hero.mp4` (672 MB), `public/assets/videos/getting-started.mp4`, `public/landing/hero-video.mp4` |
| `*.zip` | `web_app_v100.0.0.01.2.zip`, `nexr-js-app-v100.00.00.05.zip`, `next-js-app-V22.zip`, `nextjs-app-last.zip`, `app/(public).zip`, `web_app_v1.0.1.zip` |
| `*.rar` | (none found in history) |
| `*.tar` | (none found in history) |
| `_vendor_templates/*` | (none found in history) |

---

## 2. Repo Size Before / After

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Loose objects | 717.82 MiB | 0 bytes | -100% |
| Pack size | 98.30 KiB | 25.85 MiB | (consolidated) |
| **Approx. total** | **~718 MiB** | **~26 MiB** | **~96% smaller** |

---

## 3. Actions Performed

1. **Audit** — Identified largest blobs with `git rev-list --objects --all | git cat-file --batch-check`
2. **Filter** — `git filter-branch -f --index-filter` with shell script removing `*.mp4`, `*.zip`, `*.rar`, `*.tar`, `_vendor_templates/*`
3. **Cleanup** — `git reflog expire --expire=now --all` and `git gc --prune=now --aggressive`
4. **Force push** — `git push origin --force --all` and `git push origin --force --tags`

---

## 4. Warning for Collaborators

> **History was rewritten.** Anyone who has cloned this repository must:
>
> 1. Delete their local clone.
> 2. Perform a fresh clone from origin.
>
> If they pull or push without doing this, they risk re-introducing the old large blobs or causing merge conflicts. Do not merge old clones into the cleaned repo.

---

## 5. Technical Notes

- **Method:** `git filter-branch` (git filter-repo and BFG were not available on the host; Python/Java not installed).
- **Filter script:** `.git/filter-script.sh` (absolute path used for filter-branch execution).
- **Refs rewritten:** All branches, tags, and remote-tracking refs.
