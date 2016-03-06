using System.Text.RegularExpressions;
// scriptcs exporter.cs -- app/Templates app/Controls
public class ExportEntry {
    public string FileName { get; set; }
    public string RelativepathToExportDirectory { get; set; }
    public string ClassName { get; set; }

    /// <summary>
    /// Returns the formatted export entry e.g. " export {MyComponents} from './Components/my-component.component' "
    /// </summary>
    /// <returns></returns>
    public override string ToString() {
        //      export { AppComponent} from './my-template/my-template.component'
        return String.Format("export {{ {0} }} from '.{1}';", this.ClassName, this.RelativepathToExportDirectory).Replace('\\', '/');
    }
}

CreateExports();

public void CreateExports() {
    string rootDir = new DirectoryInfo(@".\").FullName;
    foreach (string exportDirPath in Env.ScriptArgs) {
        var exportDirPathFixed = exportDirPath.Replace("/", "\\");
        Console.WriteLine(String.Format("Exporting {0}", exportDirPathFixed));
       
        List<ExportEntry> exportEntriesToWrite = new List<ExportEntry>();
        DirectoryInfo exportDir = new DirectoryInfo(rootDir + exportDirPathFixed);
        foreach (FileInfo file in exportDir.EnumerateFiles("*.ts", SearchOption.AllDirectories)) {
               if (file.Name == "exports.ts")
            continue;
            ExportEntry toAdd = CreateExportEntry(file, exportDirPathFixed, rootDir);
            exportEntriesToWrite.Add(toAdd);
        }
        CreateExportFile(exportDir.FullName + "\\" + "exports.ts", exportEntriesToWrite);
        
    }
}

private void CreateExportFile(string exportFilePath, IEnumerable<ExportEntry> exportEntries) {
    string textToWrite = "";
    foreach (ExportEntry entry in exportEntries) {
        textToWrite += entry.ToString() + Environment.NewLine;
    }
    File.WriteAllText(exportFilePath, textToWrite);
}

//
private ExportEntry CreateExportEntry(FileInfo exportFile, string exportDirPath, string rootDir) {
    ExportEntry toReturn = new ExportEntry() {
        ClassName = GetFirstExportClassName(exportFile),
        RelativepathToExportDirectory = exportFile.FullName.Remove(0, rootDir.Length + exportDirPath.Length).Replace(".ts", ""),
        FileName = exportFile.Name
    };
    return toReturn;

}
private string GetFirstExportClassName(FileInfo exportFile) {
    string className = null;
    Regex regular = new Regex(@"(?<=export[\s+]class|interface)[^s+][^\s]+");

    using (StreamReader streamer = new StreamReader(exportFile.OpenRead())) {
        string contents = streamer.ReadToEnd();
        Match componentNameMatch = regular.Match(contents);
        className = componentNameMatch.ToString().Replace("{", "");
    }
    return className;
}