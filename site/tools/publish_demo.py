"""Add chosen demo PNGs to the public site (both languages), without any values behind them.

    python3 site/tools/publish_demo.py <PNG preview folder> 05_Cross_Market/01 06_Divergence_Lab/01 ...
    python3 site/tools/publish_demo.py <PNG preview folder> --synthetic <id> ...   (marks the following ids as synthetic)

Reads previews.json (titles and captions only) from the preview folder, copies the TR and EN PNG of each id to
site/public/demo/ and docs/demo/, and adds the entry to gallery.json in both places. The order given is the order shown.
"""
import json, shutil, sys
from pathlib import Path

repo = Path(__file__).resolve().parents[2]
src = Path(sys.argv[1]).expanduser()
prev = {p["id"]: p for p in json.loads((src / "previews.json").read_text())}
label, chosen = "real", []
for a in sys.argv[2:]:
    if a == "--synthetic":
        label = "synthetic"; continue
    if a not in prev:
        sys.exit(f"unknown id {a}; see {src / 'index.html'}")
    chosen.append((a, label))
for out in (repo / "site" / "public", repo / "docs"):
    (out / "demo").mkdir(parents=True, exist_ok=True)
    gp = out / "gallery.json"
    g = json.loads(gp.read_text()) if gp.exists() else {"version": 1, "items": []}
    have = {it["id"] for it in g["items"]}
    for sid, lab in chosen:
        p, folder = prev[sid], sid.split("/")[0]
        item = {"id": sid, "tab": p["tab"], "label": lab}
        for lang in ("en", "tr"):
            if lang in p:
                f = f"{folder}_{p[lang]['file']}"
                shutil.copyfile(src / folder / p[lang]["file"], out / "demo" / f)
                item[lang] = {"file": f, "title": p[lang]["title"], "caption": p[lang]["caption"]}
        g["items"] = [it for it in g["items"] if it["id"] != sid] + [item]
    gp.write_text(json.dumps(g, ensure_ascii=False, indent=1))
print(f"{len(chosen)} images added: " + ", ".join(s for s, _ in chosen))
